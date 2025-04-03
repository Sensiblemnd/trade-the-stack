type Props = {
  name: string
  logo: string
  themeColor: string
}
export const TradingCard = ({ name, logo, themeColor }: Props) => {
  return (
    <div
      className="w-60 h-80 rounded-2xl border-4 p-4 flex flex-col items-center shadow-lg"
      style={{ borderColor: themeColor, background: "#0a0a0a" }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: themeColor }}
      >
        <img src={logo} alt={name} className="w-10 h-10" />
      </div>
      <h2 className="text-white text-xl font-bold">{name}</h2>
      <p className="text-gray-400 text-sm mt-2">JavaScript Collection</p>
    </div>
  )
}

export const TradingCardCollection = () => {
  const cards = [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      themeColor: "#61DBFB",
    },
    {
      name: "Vue",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      themeColor: "#42b883",
    },
    {
      name: "Next.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      themeColor: "#ffffff",
    },
    {
      name: "TypeScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/TypeScript_Logo_%28Blue%29.svg",
      themeColor: "#3178c6",
    },
    {
      name: "Tailwind",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      themeColor: "#38b2ac",
    },
  ]

  return (
    <div className="flex gap-4 flex-wrap justify-center p-6 bg-gray-900 min-h-screen">
      {cards.map((card) => (
        <TradingCard key={card.name} {...card} />
      ))}
    </div>
  )
}
