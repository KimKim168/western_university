import { usePage } from "@inertiajs/react";

const MyNewHero = () => {
  const { WelcomeToWestern } = usePage().props;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 items-stretch">
        <div>

          <h1 className="max-w-[17ch] text-3xl md:text-5xl lg:text-[2.75rem] xl:text-4xl font-bold !leading-[1.2]">
            {WelcomeToWestern?.title}
          </h1>
          <div className="my-8 border-[1.5px] border-black w-15" />
          {WelcomeToWestern?.short_description && <div
            className="mt-6 max-w-[60ch] text-base text-primary whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: WelcomeToWestern?.short_description }}
          />}
          {WelcomeToWestern?.long_description && <div
            className="mt-6 max-w-[60ch] text-base text-primary whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: WelcomeToWestern?.long_description }}
          />}
          
        </div>

        <div className="w-full h-full rounded-xl overflow-hidden">
          <img
            src={`/assets/images/pages/${WelcomeToWestern?.images[0].image}`}
            className="h-full w-full object-cover rounded-xl"
            alt="Welcome"
          />
        </div>
      </div>
    </div>
  );
};

export default MyNewHero;
