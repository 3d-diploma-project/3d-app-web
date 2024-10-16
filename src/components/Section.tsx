interface SectionProps {
  sectionNumber: number | string
  header: string
  body: string
}

const Section = ({ sectionNumber, header, body }: SectionProps) => {
  return (
    <div className="relative flex flex-1 flex-col items-center gap-5 rounded-2xl border-2 border-app-blue bg-white md:aspect-square">
      <div className="absolute left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-app-blue text-white">
        {sectionNumber}
      </div>
      <h3 className="px-10 pt-10 text-center font-bold">{header}</h3>
      <p className="px-10 pb-10 text-center">{body}</p>
    </div>
  )
}

export default Section
