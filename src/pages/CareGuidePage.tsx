import React from 'react';
import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button';

const CareGuidePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tarantula Care Guide</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Comprehensive information to help your tarantula thrive
          </p>
        </div>
      </div>

      {/* Care Guide Navigation */}
      <div className="bg-gray-100 py-4 sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#housing" className="text-gray-700 hover:text-black transition-colors">Housing</a>
            <a href="#feeding" className="text-gray-700 hover:text-black transition-colors">Feeding</a>
            <a href="#humidity" className="text-gray-700 hover:text-black transition-colors">Humidity & Temperature</a>
            <a href="#handling" className="text-gray-700 hover:text-black transition-colors">Handling</a>
            <a href="#molting" className="text-gray-700 hover:text-black transition-colors">Molting</a>
            <a href="#species" className="text-gray-700 hover:text-black transition-colors">Species Guide</a>
          </div>
        </div>
      </div>

      {/* Care Guide Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p>
                Welcome to our comprehensive tarantula care guide. Whether you're a first-time keeper or an experienced 
                enthusiast, this guide will help you provide the best care for your exotic pet. Remember that specific 
                requirements vary by species, so always research your particular tarantula's needs.
              </p>
              <p>
                If you have specific questions, don't hesitate to <a href="/contact" className="text-black hover:underline">contact us</a> for 
                personalized advice.
              </p>
            </div>

            {/* Housing */}
            <div id="housing" className="mb-12 scroll-mt-32">
              <h2 className="text-3xl font-bold mb-4">Housing</h2>
              <p>
                The appropriate enclosure depends on your tarantula's species, size, and behavior. Tarantulas can be 
                broadly categorized into three types based on their natural habitat:
              </p>
              <ul>
                <li>
                  <strong>Terrestrial:</strong> These ground-dwelling species (like <span className="italic font-serif">Brachypelma hamorii</span> or 
                  <span className="italic font-serif"> Grammostola pulchra</span>) need enclosures with more floor space than height. Provide 3-4 inches 
                  of substrate for burrowing, along with a hide.
                </li>
                <li>
                  <strong>Arboreal:</strong> Tree-dwelling species (like <span className="italic font-serif">Caribena versicolor</span> or 
                  <span className="italic font-serif"> Poecilotheria metallica</span>) need taller enclosures with climbing opportunities. Include 
                  cork bark, branches, or plants for anchor points.
                </li>
                <li>
                  <strong>Fossorial:</strong> These burrowing species (like <span className="italic font-serif">Ceratogyrus darlingi</span>) 
                  require deeper substrate (6+ inches) to create elaborate burrow systems.
                </li>
              </ul>
              <p className="font-medium">General housing guidelines:</p>
              <ul>
                <li>Enclosure size should be approximately 3x the leg span of your tarantula in length and width.</li>
                <li>Always include a shallow water dish that's cleaned and refilled regularly.</li>
                <li>Use substrate like coco fiber, peat moss, or a mixture of both.</li>
                <li>Ensure proper ventilation through air holes or a mesh lid (with holes small enough that your tarantula can't escape).</li>
                <li>Provide appropriate decorations that mimic the natural environment: cork bark, plants (live or artificial), and hides.</li>
              </ul>
              <img 
                src="https://images.pexels.com/photos/7541118/pexels-photo-7541118.jpeg" 
                alt="Tarantula in enclosure" 
                className="rounded-lg my-6 w-full h-auto"
              />
            </div>

            {/* Feeding */}
            <div id="feeding" className="mb-12 scroll-mt-32">
              <h2 className="text-3xl font-bold mb-4">Feeding</h2>
              <p>
                Tarantulas are carnivorous predators that primarily eat insects. Their feeding schedule depends on their 
                size, age, and species.
              </p>
              <p className="font-medium">Feeding guidelines:</p>
              <ul>
                <li>
                  <strong>Spiderlings:</strong> Feed 2-3 times per week with pre-killed prey or tiny insects like fruit flies or small cricket parts.
                </li>
                <li>
                  <strong>Juveniles:</strong> Feed 1-2 times per week with appropriately sized prey (smaller than the tarantula's abdomen).
                </li>
                <li>
                  <strong>Adults:</strong> Feed once every 7-10 days, or even less frequently for adult females of larger species.
                </li>
              </ul>
              <p className="font-medium">Suitable prey items:</p>
              <ul>
                <li>Crickets (the most common feeder insect)</li>
                <li>Dubia roaches</li>
                <li>Mealworms</li>
                <li>Superworms (for larger specimens)</li>
                <li>Occasional treats like waxworms (high in fat, so use sparingly)</li>
              </ul>
              <p>
                <strong>Important feeding tips:</strong>
              </p>
              <ul>
                <li>Always remove uneaten prey after 24 hours to prevent stress or potential harm to your tarantula.</li>
                <li>Never feed wild-caught insects, as they may contain pesticides or parasites.</li>
                <li>A tarantula with a plump abdomen is well-fed and may not need food for some time.</li>
                <li>Tarantulas often refuse food before molting—this is normal and not cause for concern.</li>
              </ul>
            </div>

            {/* Humidity & Temperature */}
            <div id="humidity" className="mb-12 scroll-mt-32">
              <h2 className="text-3xl font-bold mb-4">Humidity & Temperature</h2>
              <p>
                Maintaining appropriate humidity and temperature is crucial for your tarantula's health and varies significantly by species.
              </p>
              <p className="font-medium">General temperature guidelines:</p>
              <ul>
                <li>Most species thrive between 22-27°C (72-80°F).</li>
                <li>Avoid temperatures below 18°C (65°F) or above 30°C (86°F) for extended periods.</li>
                <li>Maintain stable temperatures without sudden fluctuations.</li>
              </ul>
              <p className="font-medium">Humidity requirements by tarantula type:</p>
              <ul>
                <li>
                  <strong>Desert species</strong> (e.g., <span className="italic font-serif">Aphonopelma chalcodes</span>): 
                  30-50% humidity, with dry substrate and a water dish.
                </li>
                <li>
                  <strong>Tropical terrestrial species</strong> (e.g., <span className="italic font-serif">Brachypelma hamorii</span>): 
                  60-70% humidity, with slightly moist substrate.
                </li>
                <li>
                  <strong>Tropical arboreal species</strong> (e.g., <span className="italic font-serif">Caribena versicolor</span>): 
                  70-80% humidity, with good ventilation to prevent stagnant air.
                </li>
              </ul>
              <p>
                <strong>Maintaining humidity:</strong>
              </p>
              <ul>
                <li>Mist one side of the enclosure as needed (frequency depends on species requirements).</li>
                <li>Keep substrate slightly damp for tropical species, but never soggy.</li>
                <li>Always provide a water dish, regardless of species.</li>
                <li>Monitor humidity using a hygrometer until you're experienced enough to gauge it visually.</li>
                <li>Ensure good ventilation to prevent mold growth and respiratory issues.</li>
              </ul>
            </div>

            {/* Handling */}
            <div id="handling" className="mb-12 scroll-mt-32">
              <h2 className="text-3xl font-bold mb-4">Handling</h2>
              <p>
                While some keepers enjoy handling their tarantulas, it's important to understand that handling provides no 
                benefit to the tarantula and carries risks for both the keeper and the spider.
              </p>
              <p className="font-medium">If you choose to handle your tarantula:</p>
              <ul>
                <li>Only handle docile, New World species (e.g., <span className="italic font-serif">Brachypelma</span>, <span className="italic font-serif">Grammostola</span>, <span className="italic font-serif">Tliltocatl</span>).</li>
                <li>Never handle Old World species (e.g., <span className="italic font-serif">Poecilotheria</span>, <span className="italic font-serif">Pterinochilus</span>), which are faster and possess more potent venom.</li>
                <li>Handle over a soft surface and close to the ground in case of falls.</li>
                <li>Approach from the side, never from above (predator positioning).</li>
                <li>Gently coax the tarantula onto your open hand; never grab or pick up the spider.</li>
                <li>Keep sessions brief and return the tarantula to its enclosure at the first sign of stress.</li>
              </ul>
              <p className="font-medium text-red-600">Important safety considerations:</p>
              <ul>
                <li>New World tarantulas may flick urticating hairs when threatened, which can cause skin and eye irritation.</li>
                <li>All tarantulas can bite, though venom potency varies by species.</li>
                <li>A fall from even a short height can be fatal to a tarantula, as their abdomens can rupture.</li>
                <li>Never handle a tarantula that is in premolt, molting, or has recently molted (when exoskeleton is still soft).</li>
              </ul>
              <p>
                Remember that successful tarantula keeping doesn't require handling. Observation is the best way to enjoy these 
                fascinating creatures without causing them stress.
              </p>
            </div>

            {/* Molting */}
            <div id="molting" className="mb-12 scroll-mt-32">
              <h2 className="text-3xl font-bold mb-4">Molting</h2>
              <p>
                Molting is a critical process in a tarantula's life where it sheds its old exoskeleton to grow. This process 
                can be stressful and dangerous, requiring special care from keepers.
              </p>
              <p className="font-medium">Signs of pre-molt:</p>
              <ul>
                <li>Refusing food for days or weeks</li>
                <li>Decreased activity and spending more time in hiding</li>
                <li>Duller appearance as the old exoskeleton loosens</li>
                <li>Bald spot on the abdomen becoming darker (especially in New World species)</li>
                <li>Abdomen may appear larger or darker</li>
              </ul>
              <p className="font-medium">During molt:</p>
              <ul>
                <li>The tarantula will typically turn on its back and remain motionless for hours.</li>
                <li>DO NOT disturb a molting tarantula under any circumstances.</li>
                <li>Remove all prey items from the enclosure.</li>
                <li>Maintain appropriate humidity to help with the molting process.</li>
                <li>A complete molt may take anywhere from 15 minutes to several hours.</li>
              </ul>
              <p className="font-medium">Post-molt care:</p>
              <ul>
                <li>Do not offer food for at least 5-7 days (longer for larger specimens) as the fangs need time to harden.</li>
                <li>Ensure the tarantula has access to fresh water.</li>
                <li>Remove the molted exoskeleton once the tarantula has moved away from it.</li>
                <li>The tarantula will be especially vulnerable until its new exoskeleton hardens fully.</li>
              </ul>
              <p>
                Molting frequency varies by age and species. Spiderlings may molt every few weeks, juveniles every few months, 
                and adult females once a year or less. Adult males typically have a "ultimate molt" after which they mature 
                sexually and stop molting.
              </p>
            </div>

            {/* Species Guide */}
            <div id="species" className="scroll-mt-32">
              <h2 className="text-3xl font-bold mb-4">Species Guide</h2>
              <p>
                Below is a brief overview of some popular tarantula species and their specific care requirements. This is 
                not comprehensive but provides general guidance for popular species in our collection.
              </p>
              <div className="grid gap-6 mt-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold"><span className="italic font-serif">Brachypelma hamorii</span> (Mexican Red Knee)</h3>
                  <p className="mb-2"><strong>Care Level:</strong> Beginner</p>
                  <p className="mb-2"><strong>Temperament:</strong> Docile, rarely defensive</p>
                  <p className="mb-2"><strong>Lifespan:</strong> Females 20-30+ years, Males 5-7 years</p>
                  <p className="mb-2"><strong>Size:</strong> 5-6 inch leg span</p>
                  <p className="mb-2"><strong>Habitat:</strong> Terrestrial, 3-4 inches of substrate with hide</p>
                  <p className="mb-2"><strong>Humidity:</strong> 60-70%, moderate</p>
                  <p><strong>Special Notes:</strong> Slow-growing, iconic species known for striking red/orange knee patches. Excellent for beginners due to docile nature and hardiness.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold"><span className="italic font-serif">Grammostola pulchra</span> (Brazilian Black)</h3>
                  <p className="mb-2"><strong>Care Level:</strong> Beginner</p>
                  <p className="mb-2"><strong>Temperament:</strong> Very docile, rarely kicks hairs</p>
                  <p className="mb-2"><strong>Lifespan:</strong> Females 20-30+ years, Males 4-6 years</p>
                  <p className="mb-2"><strong>Size:</strong> 7-8 inch leg span</p>
                  <p className="mb-2"><strong>Habitat:</strong> Terrestrial, 3-4 inches of substrate with hide</p>
                  <p className="mb-2"><strong>Humidity:</strong> 60-70%, moderate</p>
                  <p><strong>Special Notes:</strong> Slow-growing species with beautiful velvety black coloration. Very calm temperament makes it ideal for beginners.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold"><span className="italic font-serif">Caribena versicolor</span> (Antilles Pink Toe)</h3>
                  <p className="mb-2"><strong>Care Level:</strong> Intermediate</p>
                  <p className="mb-2"><strong>Temperament:</strong> Docile but skittish, fast-moving</p>
                  <p className="mb-2"><strong>Lifespan:</strong> Females 10-15 years, Males 3-4 years</p>
                  <p className="mb-2"><strong>Size:</strong> 4-5 inch leg span</p>
                  <p className="mb-2"><strong>Habitat:</strong> Arboreal, tall enclosure with climbing opportunities</p>
                  <p className="mb-2"><strong>Humidity:</strong> 70-80% with good ventilation</p>
                  <p><strong>Special Notes:</strong> Striking blue/green juvenile coloration that changes to blue/pink as adults. Requires higher humidity but also good airflow to prevent stagnant conditions.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold"><span className="italic font-serif">Poecilotheria metallica</span> (Gooty Sapphire Ornamental)</h3>
                  <p className="mb-2"><strong>Care Level:</strong> Advanced</p>
                  <p className="mb-2"><strong>Temperament:</strong> Shy but defensive if provoked, extremely fast</p>
                  <p className="mb-2"><strong>Lifespan:</strong> Females 12-15 years, Males 3-4 years</p>
                  <p className="mb-2"><strong>Size:</strong> 7-8 inch leg span</p>
                  <p className="mb-2"><strong>Habitat:</strong> Arboreal, tall enclosure with cork bark for climbing/hiding</p>
                  <p className="mb-2"><strong>Humidity:</strong> 70-75%, moderate to high</p>
                  <p><strong>Special Notes:</strong> Critically endangered in the wild. Stunning metallic blue coloration. Potent venom and lightning-fast movements make this unsuitable for beginners. No handling recommended.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold"><span className="italic font-serif">Tliltocatl albopilosum</span> (Honduran Curly Hair)</h3>
                  <p className="mb-2"><strong>Care Level:</strong> Beginner</p>
                  <p className="mb-2"><strong>Temperament:</strong> Very docile, rarely defensive</p>
                  <p className="mb-2"><strong>Lifespan:</strong> Females 15-20 years, Males 4-5 years</p>
                  <p className="mb-2"><strong>Size:</strong> 5-6 inch leg span</p>
                  <p className="mb-2"><strong>Habitat:</strong> Terrestrial, 3-4 inches of substrate with hide</p>
                  <p className="mb-2"><strong>Humidity:</strong> 65-75%, moderate</p>
                  <p><strong>Special Notes:</strong> Distinctive curly hair-like setae give this species its common name. Hardy, forgiving species ideal for beginners.</p>
                </div>
              </div>
            </div>
          </div>
            
          {/* Care Guide CTA */}
          <div className="mt-16 text-center p-8 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Specific Advice?</h2>
            <p className="mb-6 text-gray-600">
              Every tarantula is unique, and care requirements can vary. If you need personalized guidance 
              for your specific species, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact">
                <Button variant="primary">
                  Contact Us
                </Button>
              </a>
              <a href="/shop">
                <Button variant="outline">
                  Shop Tarantulas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareGuidePage;