
import { SpinningText } from "./component";

export function EventSpinner() {
  return (
    <div className="absolute right-16 -bottom-24 z-20">
      <SpinningText
        radius={6}
        fontSize={1.2}
        duration={15}
        className="text-[#8B5CF6] font-header"
      >
        {`• Book Your Event • Limited Dates • `}
      </SpinningText>
    </div>
  );
}
