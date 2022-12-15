import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface CountryNamePopupProps {
  selected: CountrySummary | null;
  onClose: () => void;
}

export const CountryNamePopup = ({ selected, onClose }: CountryNamePopupProps) => {
  const getLanguageName = (language: string) => {
    if (language === "eng") return "English";
    return selected?.languages[language] || language;
  };

  return (
    <Transition appear show={!!selected} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-50"
              leaveFrom="opacity-20 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-200 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 "
                >
                  {selected?.names?.eng?.common}
                </Dialog.Title>
                <div className="mt-2 space-y-2">
                  {Object.entries(selected?.names || {}).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <div className="font-extrabold">{getLanguageName(key)}:</div>
                      <dl className="grid grid-cols-[fit-content(40%)_1fr]">
                        <dt className="font-bold mx-2">Common:</dt>
                        <dd>{value?.common}</dd>
                        <dt className="font-bold mx-2">Official:</dt>
                        <dd>{value?.official}</dd>
                      </dl>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
