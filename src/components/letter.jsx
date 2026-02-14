import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const text = `
                                                             Lexique amoureux:
                                      (inspiré de l'ouvrage de Roland Barthes, "Fragments d'un discours amoureux")           


Adorable: Ne parvenant pas à nommer la spécialité de son désir pour l'être aimé, le sujet amoureux aboutit à ce mot un peu bête: Adorable!

Annulation: Bouffée de langage au cours de laquelle le sujet en vient à annuler l'être aimé sous le volume de l'amour lui-même: par une perversion proprement amoureuse, c'est l'amour que le sujet aime, et non l'être aimé.

Comprendre: Percevant tout d'un coup l'épisode amoureux comme un noeud de raisons inexplicables et de solutions bloquées, le sujet s'écrie: "Je veux comprendre!"

Drame: Le sujet amoureux ne peut écrire lui-même son roman d'amour. Seule une forme très archaïque pourrait recueillir l'évènement qu'il déclame sans pouvoir le raconter.

Ecrire: Leurres, débats et impasses auxquels donne lieu le désir d'<<exprimer>> le sentiment amoureux dans une <<création>> (notamment d'écriture).

Je-t-aime: La figure ne réfère pas à la déclaration d'amour, à l'aveu, mais à la profération répétée du cri d'amour. 

Nuit: Tout état qui suscite chez le sujet la métaphore de l'obscurité ( affective, intellective, existentielle) dans laquelle il se débat ou s'apaise.

Ravissement: Episode réputé initial (mais il peut être reconstruit après coup) aucours duquel le sujet amoureux se trouve <<ravi>> (capturé et enchanté) par l'image de l'objet aimé ( nom populaire: coup de foudre; nom savant: énamoration).

Seul: La figure renvoie, non à ce que peut être la solitude humaine du sujet amoureux, mais à sa solitude <<philosophique>>, l'amour passion n'étant pris en charge aujourd'hui par aucun système majeur de pensée.

[...]


Toutes ces expressions, bien qu'en apparence rochambolesques, sont en réalité des fragments d'un discours amoureux, des morceaux de langage qui révèlent les complexités et les paradoxes de l'expérience amoureuse.
 Elles témoignent de la difficulté du sujet amoureux à exprimer son sentiment, à comprendre son propre désir, et à trouver une place pour l'être aimé dans son existence.
 Ce sujet amoureux n'étant nul autre que ma personne.

 Je ne puis peut-être pas exceller dans l'art de l'expression et de l'amour, mais permets-moi de manier l'héritage de Molière, afin d'éventer tout mon ressenti à ton egard.

 Kisses.

`;

export default function Letter() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        padding: "80px 20px",
        maxWidth: "600px",
        margin: "0 auto",
        whiteSpace: "pre-line",
        background: "rgba(255,255,255,0.85)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      <p>{displayedText}</p>
    </motion.section>
  );
}
