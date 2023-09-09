import Range from '../Range'
import Select from '../Select'

export default function Filters() {
  return (
    <div className="m-auto flex max-w-7xl flex-row items-start justify-start gap-5 pb-4 align-top">
      <Select />
      <Range />
    </div>
  )
}
