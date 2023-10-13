import logo from '../assets/Photos/logo.png';

export default function Banner() {
  return (
    <div className='flex flex-row justify-end items-center p-4'>
      <img src={logo} alt="Logo" width={40} className='m-4'/>
      <h1>La maison Jungle</h1>
    </div>
  );
}
