import globe from '../images/globe.jpg'

export default function Header(){
  return(
  <header>
        <img src={globe} className='globe' alt='globe'></img>
        <h2 className='title'>mytraveljournal</h2>
  </header>
  )
}