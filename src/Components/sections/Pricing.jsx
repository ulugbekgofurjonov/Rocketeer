import { pricingData } from '../../data';
import Card from '../ui/Card';

function Pricing() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {pricingData.map((item, index) => (
            <Card
              key={index}
              plan={item.plan}
              price={item.price}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;