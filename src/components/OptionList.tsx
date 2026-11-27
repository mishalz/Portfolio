interface Props {
  options: { title: string; body: string }[]
  active: number
  onSelect: (index: number) => void
  /** `stacked` lists options vertically; `row` lays them side by side on wide screens. */
  layout: 'stacked' | 'row'
}

/** A set of toggle buttons where exactly one is selected. */
export function OptionList({ options, active, onSelect, layout }: Props) {
  return (
    <div className={`options options--${layout}`}>
      {options.map((option, i) => (
        <button key={option.title} type="button" className="option" aria-pressed={i === active} onClick={() => onSelect(i)}>
          <span className="option__title">{option.title}</span>
          <span className="option__body">{option.body}</span>
        </button>
      ))}
    </div>
  )
}
