import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

const ModalContext = createContext((modal: ReactNode) => {});

export const ModalProvider = (props: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode>(undefined);
  const resetModal = useCallback(() => {
    setModal(undefined);
  }, [setModal]);
  return (
    <ModalContext.Provider value={setModal as (modal: ReactNode) => {}}>
      
        {props.children}
        {!!modal && (
          <div
            className="fixed left-0 top-0 z-50 h-screen w-screen
        cursor-pointer overflow-hidden bg-black bg-opacity-25 p-4
        backdrop-blur-sm lg:p-16"
            onClick={resetModal}
          >
            {modal}
          </div>
        )}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
