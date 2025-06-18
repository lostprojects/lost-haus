import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import Breadcrumb from '@/components/ui/breadcrumb';
import PrintButton from '@/components/ui/print-button';
import ShareButton from '@/components/ui/share-button';
import Seo from '@/components/seo/Seo';
import { businessSchema } from '@/components/seo/seo-schemas';

const EmergencyKit: React.FC = () => {

  return (
    <PageLayout footerLogoType="none" hasHero={false}>
      <Seo
        title="Wedding Day Emergency Kit Checklist"
        description="Pack these essentials to solve any minor mishaps on your big day."
        schema={businessSchema}
      />
      <section className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="flex items-center justify-between">
            <Breadcrumb items={[
              { label: 'Resources', href: '/resources' },
              { label: 'Emergency Kit' }
            ]} />
            <div className="flex items-center gap-2">
              <PrintButton />
              <ShareButton 
                title="Wedding Day Emergency Kit Checklist"
                text="Check out this comprehensive wedding day emergency kit checklist from Somerhaus"
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-header">
            Wedding Day Emergency Kit Checklist
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Be prepared on the big day with a kit of essentials for any minor mishaps. Here's a comprehensive list to assemble in a tote or case and have within reach (often kept in the bridal suite or with your maid of honor):
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Sewing Kit:</strong> Small travel kit with needles, thread (white, black, and any dress color), small scissors, safety pins (many sizes), and hem tape. For fixing loose buttons, bustle issues, or tears.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Safety Pins & Bobby Pins:</strong> Lots of them! Different sizes of safety pins can fix dress emergencies, and bobby pins to secure any hair strays or headpieces.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Fashion Tape:</strong> Useful for securing dress necklines, keeping straps in place, or hemming a fallen dress hem in a pinch.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Stain Remover:</strong> A tide-to-go pen or Shout wipes for any spills on attire. (White dresses attract red wine and makeup smudges – be ready!).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">First Aid Basics:</strong> Band-aids (for blisters from shoes or small cuts), antiseptic wipes, pain relievers (Advil, Tylenol) for headaches or soreness, antacid (Tums/Pepto for nervous stomachs), any personal medications (e.g., inhaler, allergy meds like Benadryl).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Tissues or Handkerchief:</strong> For happy tears during vows or emotional moments.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Makeup for Touch-ups:</strong> Translucent powder (to reduce shine in photos), lipstick or gloss (bride's shade to reapply), concealer, and mirror. Blotting papers for oil control.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Hairspray and Comb/Brush:</strong> To tame flyaways and keep hairdo in place, especially if outdoors (Cincy humidity or wind can challenge hair!).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Deodorant:</strong> Travel stick or spray – nerves can cause perspiration, freshen up as needed.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Perfume/Cologne:</strong> A small bottle to refresh scent.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Mints or Breath Strips:</strong> You'll be talking to many guests (and kissing!). Fresh breath is a must. Avoid gum (not photogenic if you forget to spit out).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Dental floss/toothpicks:</strong> For post-meal cleanup if something's stuck. Also consider a travel toothbrush and toothpaste if you have a long day between meals.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Hand sanitizer or wipes:</strong> Good to have, especially if touching lots of hands or surfaces (also for any little stains on dress bottom – wipes can help gently remove dirt).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Snacks & Water:</strong> Very important! Granola bars, crackers, or nuts to keep your energy up while getting ready. A couple of water bottles or a mini water pitcher and cups – you might forget to hydrate. (Assign someone to remind you to drink water throughout the day!).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Straws:</strong> Sounds odd, but useful so the bride can drink without smudging lipstick or needing to remove the veil (also avoids leaving lipstick marks on glasses).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Phone Chargers:</strong> Ensure someone has a charger or portable battery for phones (for important calls or if you use phone for music, coordinating, etc.).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Flat Shoes:</strong> Bride should have a pair of comfy flats or flip-flops for dancing or between events. Bridesmaids too if heels get painful.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Umbrella:</strong> Check the forecast – even if low chance of rain, a white or clear umbrella can save the day (and looks fine in pics). Also can provide shade if it's very sunny/hot.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Static Guard spray:</strong> If dresses are clingy or staticky (winter weddings especially when air is dry).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Lighter:</strong> If you have candles in decor, a lighter or matches to light them (your coordinator likely has this, but just in case). Also can seal fraying ribbon ends in a pinch.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Cash & IDs:</strong> Have some cash on hand (for unexpected tips, a vendor errand, etc.) and your ID (especially if hitting bars after or if needed for any reason). Keep these in a secure place or with a trusted person.
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Copy of Vendor Contacts and Timeline:</strong> Not exactly an "emergency" item, but have a printout of your vendor list with phone numbers and the day's schedule. If someone's late or lost, you can quickly call or adjust timeline. (Give a copy to your coordinator or maid of honor/best man too).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Misc Comforts:</strong> Eye drops (if you're prone to red eyes or wearing contacts), tampons/pads (even if not expected, nerves can do funny things; plus someone else might need), clear nail polish (fixes runs in stockings or last-minute manicure chips), super glue (for broken shoe heel or decor fix), earring backs (those little backs love to disappear), and a small high-protein snack like beef jerky or cheese stick for the groom (guys often forget to eat too!).
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2" />
              <div>
                <strong className="font-semibold">Emergency Numbers:</strong> Phone number for a backup vendor if something fails – e.g., a taxi number in case the limo no-shows, or nearby salon if a hair emergency. Chances are you won't need these, but having a contingency plan can reduce panic.
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong>Designate someone</strong> (a bridesmaid, your personal attendant, or coordinator) to be keeper of the emergency kit and to troubleshoot on the fly. That way, if your dress bustle breaks, you say "Hey, can you grab the sewing kit and help fix this?" and it's handled quickly without involving you in the stress.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              This kit ensures that nearly any minor issue can be fixed immediately, keeping your day on track. It's the Boy Scout "be prepared" approach – and in our experience, having it means you'll likely need few of these items, but if you didn't have them, that's when something would go wrong!
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EmergencyKit;
