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
                <div className="p-10 bg-gray-400 rounded-md" onClick={() => setBottomsheetOpen(oldState => !oldState)}>
                    <span>Disciplina, assunto, prova...</span>
                </div>
            ) : (
                <SearchComponent/>
            )}

        </Fragment>
    )
}

export { Search }