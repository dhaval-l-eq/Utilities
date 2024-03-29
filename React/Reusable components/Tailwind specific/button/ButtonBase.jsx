import { NavLink } from 'react-router-dom';

const btnConfig = {
   sm: 'btn-sm',
   md: 'btn-md',
   lg: 'btn-lg',
   block: 'w-full',
};

/**
 *
 * Base Button component upon which other button components are made. It is recommended to follow this practice throughout.
 * @returns Navlink or button as per props
 */
function ButtonBase(props) {
   return (
      <>
         {props.isLink ? (
            <NavLink
               className={`${props.className ? props.className : ''} ${props.size ? btnConfig[props.size] : ''} btn`}
               to={props.linkPath}
            >
               {props.children}
            </NavLink>
         ) : (
            <button
               {...props}
               onClick={props.onClick}
               className={`${props.className ? props.className : ''} ${props.size ? btnConfig[props.size] : ''} btn`}
            >
               {props.children}
            </button>
         )}
      </>
   );
}
export default ButtonBase;
