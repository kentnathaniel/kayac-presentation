import SmartCat from "./assets/smart-cat-suits.svg?react";

function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <nav className="flex w-screen fixed top-0 gap-8 p-8 justify-end">
        <a className="cursor-pointer">Intro</a>
        <a className="cursor-pointer">Experiences</a>
        <a className="cursor-pointer">Interest</a>
      </nav>

      <div className="flex flex-col justify-center mx-auto h-screen ">
        <div className="bg-white w-24 h-24">
          <SmartCat className="text-white" />
        </div>
        <h1 className="text-3xl text-left">Hi there, KAYAC friends!</h1>
        <p className="font-thin">
          I'm Kent. Frontend Developer with 3 years experience
        </p>
      </div>

      <div className="flex flex-col justify-center mx-auto h-screen">
        <h1 className="text-3xl text-left">Experience section</h1>
        <p className="font-thin">Experience section placeholder</p>
      </div>

      <div className="flex flex-col justify-center mx-auto h-screen">
        <h1 className="text-3xl text-left">Interest section</h1>
        <p className="font-thin">Interest section placeholder</p>
      </div>
    </div>
  );
}

export default App;
