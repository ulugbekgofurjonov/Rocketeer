function Card({ plan, price, features }) {
  return (
    <div className="bg-[#04080D99] font-serif shadow-[-8px_8px_32px_0px_#F23A2940] text-[#F2F2F2] flex flex-col gap-3 py-12 px-4 text-center rounded-2xl w-60 max-w-sm shadow-[-8px_8px_32px_0px_#F23A2940]
  hover:shadow-[-12px_12px_40px_0px_#F23A2960]
  transition-shadow
  duration-300 hover:scale-105
  transition-transform
  duration-300">
      <h3 className="text-xl font-bold font-serif">{plan}</h3>
      <ul className="flex flex-col gap-3">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="text-2xl pt-8 font-serif">{price}</p>
    </div>
  );
}

export default Card;