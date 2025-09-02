import amcsImage from "../assets/images/projects/amcs.jpg";
import lesfuretsImage from "../assets/images/projects/lesfurets.jpg";
import adnoscoImage from "../assets/images/projects/adnosco.jpg";
import verecipesImage from "../assets/images/projects/verecipes.jpg";
import parkenddImage from "../assets/images/projects/parkendd.jpg";
import doctolibImage from "../assets/images/projects/doctolib.jpg";
import babbelImage from "../assets/images/projects/babbel.jpg";
import { ProjectItem } from "../types";

export const PROJECTS: ProjectItem[] = [
    {
        title: "Babbel B2B",
        description: "My team works on the B2B part of Babbel. We're working on features enabling companies to provide language courses to their employees.",
        link: "https://https://www.babbelforbusiness.com//",
        image: babbelImage,
        technologies: ["Ruby on Rails", "React"]
    },
    {
        title: "Doctolib for hospitals",
        description: "My team worked on making Doctolib better for hospitals. This includes adapting existing features so that they work at a very large scale, and creating completely new ones.",
        link: "https://www.doctolib.fr/",
        image: doctolibImage,
        technologies: ["Ruby on Rails", "React"]
    },
    {
        title: "Comparison services",
        description: "At lesfurets, I worked in a team creating comparators for home/financial products such as energy, broadband and mortgages.",
        link: "https://www.lesfurets.com",
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