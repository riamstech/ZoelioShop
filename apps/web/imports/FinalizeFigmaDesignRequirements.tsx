import svgPaths from "./svg-dxjzf7fl8l";
import imgLogo from "figma:asset/13d46c317fc43fd76f87991d6cd185d45e880cd7.png";

function Section() {
  return <div className="absolute left-[909px] size-0 top-[444.5px]" data-name="Section" />;
}

function Logo() {
  return (
    <div className="absolute left-[104px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.1)] size-[192px] top-0" data-name="Logo">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-[216px] w-[400px]" data-name="Heading 1">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[30px] text-center tracking-[0.3955px]">Welcome Back!</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[260px] w-[400px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[199.77px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Your smart parking solution</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[284px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[284px] relative w-[400px]">
        <Logo />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[29px] relative rounded-[16px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-800 text-nowrap tracking-[-0.1504px] whitespace-pre">Login</p>
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="[grid-area:1_/_2] h-[29px] relative rounded-[16px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] h-[29px] items-center justify-center px-[9px] py-[5px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-800 text-nowrap tracking-[-0.1504px] whitespace-pre">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-gray-200 h-[36px] relative rounded-[16px] shrink-0 w-[400px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[36px] px-[3px] py-[3.5px] relative w-[400px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-gray-800 text-nowrap tracking-[-0.1504px] whitespace-pre">Email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-gray-50 h-[36px] left-0 rounded-[10px] top-0 w-[400px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[400px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Enter your email</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f8e7e80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17070980} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function LoginSignup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[400px]" data-name="LoginSignup">
      <PrimitiveLabel />
      <Container1 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[14px] text-gray-800 text-nowrap tracking-[-0.1504px] whitespace-pre">Password</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-gray-50 h-[36px] left-0 rounded-[10px] top-0 w-[400px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[40px] py-[4px] relative rounded-[inherit] w-[400px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18f7f580} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4317f80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[372px] size-[16px] top-[12px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Icon1 />
      <Button />
    </div>
  );
}

function LoginSignup1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[74px] w-[400px]" data-name="LoginSignup">
      <PrimitiveLabel1 />
      <Container2 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Remember me</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[117.695px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[117.695px]">
        <PrimitiveButton2 />
        <Label />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.164px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[115.164px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#009689] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Forgot password?</p>
      </div>
    </div>
  );
}

function LoginSignup2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-0 top-[148px] w-[400px]" data-name="LoginSignup">
      <Container3 />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-r from-[#00bba7] h-[36px] left-0 rounded-[10px] to-[#0092b8] top-[184px] w-[400px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[181.95px] not-italic text-[14px] text-nowrap text-white top-[8.5px] tracking-[-0.1504px] whitespace-pre">Login</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[57.49px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_75)" id="Icon">
          <path d={svgPaths.pe4cb0f0} id="Vector" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.1133 5.33333H8" id="Vector_2" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e371d00} id="Vector_3" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_4" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3adb3b00} id="Vector_5" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24_75">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_1] bg-gray-50 relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon3 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[89.49px] not-italic text-[14px] text-gray-800 text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Google</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[61.87px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_24_84)" id="Icon">
          <path d={svgPaths.p2a2e2500} id="Vector" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pade6c00} id="Vector_2" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_24_84">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:1_/_2] bg-gray-50 relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon4 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[93.87px] not-italic text-[14px] text-gray-800 text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Apple</p>
    </div>
  );
}

function LoginSignup3() {
  return (
    <div className="absolute gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[36px] left-0 top-[304px] w-[400px]" data-name="LoginSignup">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-px left-0 top-[9.5px] w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-white h-[20px] left-[138.8px] top-0 w-[122.383px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[8px] not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Or continue with</p>
    </div>
  );
}

function LoginSignup4() {
  return (
    <div className="absolute h-[20px] left-0 top-[260px] w-[400px]" data-name="LoginSignup">
      <Container4 />
      <Text />
    </div>
  );
}

function TabPanel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[400px]" data-name="Tab Panel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[400px]">
        <LoginSignup />
        <LoginSignup1 />
        <LoginSignup2 />
        <Button2 />
        <LoginSignup3 />
        <LoginSignup4 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[400px]" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-full items-start relative w-[400px]">
        <TabList />
        <TabPanel />
      </div>
    </div>
  );
}

function LoginSignup5() {
  return (
    <div className="bg-white h-[844px] relative shrink-0 w-full" data-name="LoginSignup">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[844px] items-start pb-[24px] pl-[24px] pr-0 pt-[40px] relative w-full">
          <Container />
          <PrimitiveDiv />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[844px] items-start left-[461px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[22.5px] w-[448px]" data-name="Container">
      <LoginSignup5 />
    </div>
  );
}

export default function FinalizeFigmaDesignRequirements() {
  return (
    <div className="relative size-full" data-name="Finalize Figma Design Requirements" style={{ backgroundImage: "linear-gradient(147.02deg, rgb(240, 253, 250) 0%, rgb(236, 254, 255) 50%, rgb(240, 249, 255) 100%), linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%)" }}>
      <Section />
      <Container5 />
    </div>
  );
}