/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/connectionFilterActions';

import style from './connectionFilter.module.scss';

// export default function ConnetctionFilter() {
//   const [all, setAll] = useState(false);
//   const [connections, setConnections] = useState({
//     zero: false,
//     one: false,
//     two: false,
//     free: false,
//   });

//   useEffect(() => {
//     const allSelected = {
//       zero: true,
//       one: true,
//       two: true,
//       free: true,
//     };
//     if (JSON.stringify(connections) === JSON.stringify(allSelected)) {
//       setAll(true);
//     } else if (JSON.stringify(connections) !== JSON.stringify(allSelected)) {
//       setAll(false);
//     }
//   }, [connections]);

//   // eslint-disable-next-line consistent-return
//   function handleConnection(e) {
//     switch (e.target.id) {
//       case 'all':
//         if (all === false) {
//           setAll((current) => !current);
//           setConnections({
//             zero: true,
//             one: true,
//             two: true,
//             free: true,
//           });
//         } else if (all === true) {
//           setAll((current) => !current);
//           setConnections({
//             zero: false,
//             one: false,
//             two: false,
//             free: false,
//           });
//         }
//         break;
//       case 'zero':
//         setConnections((current) => ({ ...current, zero: !current.zero }));
//         break;
//       case 'one':
//         setConnections((current) => ({ ...current, one: !current.one }));
//         break;
//       case 'two':
//         setConnections((current) => ({ ...current, two: !current.two }));
//         break;
//       case 'free':
//         setConnections((current) => ({ ...current, free: !current.free }));
//         break;
//       default:
//         return null;
//     }
//   }
//   return (
//     <aside className={style.filters}>
//       <h3 className={style.title}>Количество пересадок</h3>
//       <form className={style.form}>
//         <ul className={style.list}>
//           <li className={style.item}>
//             <input className={style.checkbox} type="checkbox" id="all" checked={all} onChange={handleConnection} />
//             <label className={style.myCheckbox} htmlFor="all">
//               Все
//             </label>
//           </li>
//           <li className={style.item}>
//             <input
//               className={style.checkbox}
//               type="checkbox"
//               id="zero"
//               checked={connections.zero}
//               onChange={handleConnection}
//             />
//             <label className={style.myCheckbox} htmlFor="zero">
//               Без пересадок
//             </label>
//           </li>
//           <li className={style.item}>
//             <input
//               className={style.checkbox}
//               type="checkbox"
//               id="one"
//               checked={connections.one}
//               onChange={handleConnection}
//             />
//             <label className={style.myCheckbox} htmlFor="one">
//               1 пересадка
//             </label>
//           </li>
//           <li className={style.item}>
//             <input
//               className={style.checkbox}
//               type="checkbox"
//               id="two"
//               checked={connections.two}
//               onChange={handleConnection}
//             />
//             <label className={style.myCheckbox} htmlFor="two">
//               2 пересадки
//             </label>
//           </li>
//           <li className={style.item}>
//             <input
//               className={style.checkbox}
//               type="checkbox"
//               id="free"
//               checked={connections.free}
//               onChange={handleConnection}
//             />
//             <label className={style.myCheckbox} htmlFor="free">
//               3 пересадки
//             </label>
//           </li>
//         </ul>
//       </form>
//     </aside>
//   );
// }

function TimeFilter({
  timeFilter,
  handleConnectionAll,
  handleConnectionZero,
  handleConnectionOne,
  handleConnectionTwo,
  handleConnectionFree,
}) {
  // console.log(timeFilter);
  const { all, connections } = timeFilter;
  return (
    <aside className={style.filters}>
      <h3 className={style.title}>Количество пересадок</h3>
      <form className={style.form}>
        <ul className={style.list}>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="all" checked={all} onChange={handleConnectionAll} />
            <label className={style.myCheckbox} htmlFor="all">
              Все
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="zero"
              checked={connections.zero}
              onChange={handleConnectionZero}
            />
            <label className={style.myCheckbox} htmlFor="zero">
              Без пересадок
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="one"
              checked={connections.one}
              onChange={handleConnectionOne}
            />
            <label className={style.myCheckbox} htmlFor="one">
              1 пересадка
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="two"
              checked={connections.two}
              onChange={handleConnectionTwo}
            />
            <label className={style.myCheckbox} htmlFor="two">
              2 пересадки
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="free"
              checked={connections.free}
              onChange={handleConnectionFree}
            />
            <label className={style.myCheckbox} htmlFor="free">
              3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </aside>
  );
}

const mapStateToProps = (state) => ({
  timeFilter: state.connectionFilterReducer,
});

export default connect(mapStateToProps, actions)(TimeFilter);
