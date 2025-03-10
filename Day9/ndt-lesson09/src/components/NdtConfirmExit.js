import React, { useEffect } from 'react'

export default function NdtConfirmExit() {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = 'Bạn có chắc chắn muốn thoát không?';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
  return <h2> Trang web này sẽ cảnh báo bạn rời đi!!</h2>;
}
