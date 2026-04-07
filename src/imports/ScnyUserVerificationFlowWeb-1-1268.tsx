import imgImageGmailVerificationEmail from "figma:asset/1825180281f2d594063dc1307276c40fa16c9d67.png";

function ImageGmailVerificationEmail() {
  return (
    <div className="absolute h-[1045.672px] left-0 top-0 w-[1359px]" data-name="Image (Gmail verification email)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGmailVerificationEmail} />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#069bd7] h-[36px] relative rounded-[4px] shrink-0 w-[145.711px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[73px] not-italic text-[14px] text-center text-white top-[8.5px] whitespace-nowrap">Verify account</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start justify-center left-[203.84px] pr-[0.008px] top-[731.97px] w-[951.313px]" data-name="Container">
      <Button />
    </div>
  );
}

export default function ScnyUserVerificationFlowWeb() {
  return (
    <div className="bg-white relative size-full" data-name="SCNY user verification flow - web">
      <ImageGmailVerificationEmail />
      <Container />
    </div>
  );
}