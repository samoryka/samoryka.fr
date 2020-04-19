import amcsImage from "../assets/images/projects/amcs.jpg";
import lesfuretsImage from "../assets/images/projects/lesfurets.jpg";
import adnoscoImage from "../assets/images/projects/adnosco.jpg";
import verecipesImage from "../assets/images/projects/verecipes.jpg";
import cheapConverterImage from "../assets/images/projects/cheapconverter.jpg";
import parkenddImage from "../assets/images/projects/parkendd.jpg";
import { ProjectItem } from "../types";

export const PROJECTS: ProjectItem[] = [
    {
        title: "Comparison services",
        description: "At lesfurets, my team works on creating comparators for home/financial products such as energy, broadband and mortgages. We ship new features on a daily basis.",
        link: "https://www.lesfurets.com/energie/formulaire",
        image: lesfuretsImage,
        technologies: ["React", "TypeScript", "Java", "Docker"]
    },
    {
        title: "AMCS",
        description: "I developed an Adobe Reader plugin for AMCS, an application used at the TU Dresden to make lectures more interactive.",
        link: "https://amcs.website/about",
        image: amcsImage,
        technologies: ["C++"]
    },
    {
        title: "VeRecipes",
        description: "An easy way to find new vegatarian recipes. I developed a REST API with Spring, deployed it to AWS and made an Android application to consume it.",
        link: "https://github.com/samoryka/VeRecipesClient",
        image: verecipesImage,
        technologies: ["Java", "Spring", "Android", "AWS"]
    },
    {
        title: "Cheap Converter",
        description: "A simple React PWA I made to convert weights and volumes.",
        link: "https://github.com/samoryka/cheap-converter",
        image: cheapConverterImage,
        technologies: ["React", "PWA", "JavaScript"]
    },
    {
        title: "Adnosco",
        description: "I helped develop new features for Adnosco, a research project about privacy. I specifically focused on improving the UI.",
        link: "https://adnosco.liris.cnrs.fr/doku.php",
        image: adnoscoImage,
        technologies: ["JavaScript", "HTML/CSS"]
    },
    {
        title: "ParkenDD",
        description: "I helped overhaul the UI of ParkenDD (not yet deployed in the real application).",
        link: "https://github.com/samoryka/ParkenDD",
        image: parkenddImage,
        technologies: ["Android", "Java"]
    }
];