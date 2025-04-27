
import { FeatureSteps } from "./feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Your Vision',
    content: 'Share your dream event with us. Whether it\'s an intimate wedding, corporate gathering, or special celebration, we\'ll help bring your vision to life.', 
    image: "/lovable-uploads/f8a14efe-117f-4fea-8c12-b9371b4d3825.png"
  },
  { 
    step: 'Step 2',
    title: 'Tailored Planning',
    content: 'Our expert team works with you to customize every detail, from layout to lighting, ensuring your event reflects your unique style.',
    image: "/lovable-uploads/5681976d-8810-4ced-9f69-628ef625593f.png"
  },
  { 
    step: 'Step 3',
    title: 'Flawless Execution',
    content: 'Relax and enjoy while our professional staff ensures every moment of your event runs smoothly, creating memories that last a lifetime.',
    image: "/lovable-uploads/de58a57e-3411-4a58-9d1a-64324adbb089.png"
  },
]

export function FeatureStepsDemo() {
  return (
    <FeatureSteps 
      features={features}
      title="Your Event Starts Here"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  )
}
