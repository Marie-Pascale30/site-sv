import AncientBook from "./ancienbook";

export default function BibleVerse() {
    const leftPage = (
        <>
            <sup><sup>6.</sup> </sup>
            Mais au commencement, quand Dieu crééa le monde, "Il a fait l'homme et la femme. <br />
            <sup><sup>7.</sup> </sup>
            C'est pourquoi l'homme quittera son père et sa mère pour vivre avec sa femme. <br />

        </>
    );

    const rightPage = (
        <>
        <sup><sup>8.</sup> </sup>
            Et les deux deviendront comme une seule personne." Ainsi, ils ne sont plus deux, mais ils sont comme une seule personne.
            <br />
            <span style={highlight}>
                <sup><sup>9.</sup> </sup>
               Ne séparez donc pas ce que Dieu a uni. 
            </span>
        </>
    );

    return (
        <section style={sectionStyle}>
            <AncientBook
                leftPage={leftPage}
                rightPage={rightPage}
                reference="Marc 10  <3"
            />
        </section>
    );
}

const sectionStyle = {
    padding: "120px 20px",
    display: "flex",
    justifyContent: "center",
};

const highlight = {
    background: "linear-gradient(120deg, #ffd6e8, #ff8fab)",
    padding: "4px 6px",
    borderRadius: "4px",
    fontWeight: "bold",
};
