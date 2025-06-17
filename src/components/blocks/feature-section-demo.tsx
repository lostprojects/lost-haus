import { FeatureSteps } from "./feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Share Your Vision',
    content: 'Tell us about your dream event. Whether it\'s an intimate wedding ceremony, dynamic corporate gathering, or milestone celebration, we\'ll listen carefully and help transform your unique vision into reality.'
  },
  { 
    step: 'Step 2',
    title: 'Craft Your Plan',
    content: 'Our experienced team collaborates with you to design every detail, from spatial layout and ambient lighting to personalized touches that reflect your style and story.'
  },
  { 
    step: 'Step 3',
    title: 'Celebrate & Create Magic',
    content: 'Relax and be present while our dedicated professionals orchestrate every moment, ensuring your event flows effortlessly and creates unforgettable memories.'
  },
]

export function FeatureStepsDemo() {
  return (
    <FeatureSteps 
      features={features}
      title="A Perfect Event in Three Steps"
      subtitle={
        <>
          Our approachable, helpful <a href="/about" className="text-brand hover:text-brand/80 underline underline-offset-2">team</a> is here to make planning your perfect event effortless and enjoyable.
        </>
      }
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  )
}
