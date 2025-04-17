// import StickyScroll from "@/components/StickyScroll";

import StickyScroll from "./ui/StickyScroll";

const scrollItems = [
  {
    title: "Meditation",
    description: "Calm your mind and body with guided meditation sessions.",
    category: "Self-care",
    image: "/branding.webp",
    mentor: "Jane Cooper",
  },
  {
    title: "Mental Therapy",
    description: "Therapy sessions to unlock your inner peace.",
    category: "Self-care",
    image: "/concept.webp",
    mentor: "Wade Warren",
  },
  {
    title: "Sleep Sounds",
    description: "Drift into restful sleep with soothing sounds.",
    category: "Sleep",
    image: "/branding.webp",
    mentor: "Dianne Russell",
  },
];

export default function ScrollItem() {
    return (
        <>
            <StickyScroll items={scrollItems} />;
        </>
    )
}
