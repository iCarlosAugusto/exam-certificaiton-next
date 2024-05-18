import { Fragment, useEffect, useState } from "react"
import Sheet from 'react-modal-sheet';
import { SearchComponent } from "./search.compoent";

function Search() {


    const [isPhone, setIsPhone] = useState(false);
    const [isBottomsheetOpen, setBottomsheetOpen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const checkDeviceType = () => {
        if (mediaQuery.matches) {
          setIsPhone(true);
        } else {
          setIsPhone(false);
          setBottomsheetOpen(false);
        }
      };
  
      checkDeviceType();

      const mediaQueryListener = () => {
        checkDeviceType();
      };
      mediaQuery.addEventListener('change', mediaQueryListener);

      return () => {
        mediaQuery.removeEventListener('change', mediaQueryListener);
      };
    }, []);
    return (
        <Fragment>
            <Sheet isOpen={isBottomsheetOpen } onClose={() => setBottomsheetOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <SearchComponent/>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
            {isPhone ? (
                <div className="pt-4 pb-4 bg-gray-200 rounded-lg flex justify-center items-center" onClick={() => setBottomsheetOpen(oldState => !oldState)}>
                    <span className="text-center font-medium">Disciplina, assunto, prova...</span>
                </div>
            ) : (
                <SearchComponent/>
            )}

        </Fragment>
    )
}

export { Search }