import './portolist.scss'

export default function Portolist({id, title, active, setselected}) {
  return <li className={active ? "portolist active" : "portolist"}
            onClick={() =>setselected(id)}
         >
      {title}
  </li>;
}
