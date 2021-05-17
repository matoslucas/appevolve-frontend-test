type OrderIconProps = {
  color: string;
};
const OrderIcon = ({ color= "#FFB546"}: OrderIconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={"svg-inline--fa ant-menu-item-icon"}
    style={{ fontSize: "30px" }}
  >
    <circle cx="15" cy="15" r="15" fill={color} />
    <path
      d="M22.3085 20.1875L21.15 9.36752C21.0959 8.85418 20.8535 8.37911 20.4695 8.03417C20.0854 7.68923 19.5872 7.49891 19.071 7.50002H10.929C10.4128 7.49891 9.91456 7.68923 9.53055 8.03417C9.14655 8.37911 8.90407 8.85418 8.85 9.36752L7.6915 20.1875C7.66029 20.4791 7.69077 20.7739 7.78097 21.0529C7.87117 21.3319 8.01907 21.5888 8.21506 21.8069C8.41104 22.025 8.65073 22.1995 8.91854 22.3189C9.18635 22.4383 9.47628 22.5 9.7695 22.5H20.2305C20.5237 22.5 20.8137 22.4383 21.0815 22.3189C21.3493 22.1995 21.589 22.025 21.785 21.8069C21.9809 21.5888 22.1288 21.3319 22.219 21.0529C22.3092 20.7739 22.3397 20.4791 22.3085 20.1875ZM21.0415 21.1375C20.9398 21.2521 20.8149 21.3436 20.6751 21.4061C20.5352 21.4686 20.3837 21.5006 20.2305 21.5H9.7695C9.61652 21.5001 9.46523 21.4679 9.3255 21.4056C9.18576 21.3433 9.0607 21.2523 8.95845 21.1385C8.8562 21.0247 8.77906 20.8906 8.73203 20.7451C8.68501 20.5995 8.66915 20.4456 8.6855 20.2935L9.8445 9.47402C9.87293 9.20634 9.99949 8.95868 10.1998 8.77881C10.4 8.59895 10.6598 8.49963 10.929 8.50002H19.071C19.3402 8.49963 19.6 8.59895 19.8003 8.77881C20.0005 8.95868 20.1271 9.20634 20.1555 9.47402L21.3145 20.2935C21.3315 20.4457 21.3159 20.5997 21.2688 20.7454C21.2218 20.891 21.1443 21.025 21.0415 21.1385V21.1375Z"
      fill="white"
    />
    <path
      d="M18.5 10H17.5C17.3674 10 17.2402 10.0527 17.1464 10.1465C17.0527 10.2402 17 10.3674 17 10.5C17 10.6326 17.0527 10.7598 17.1464 10.8536C17.2402 10.9473 17.3674 11 17.5 11C17.5 11.6631 17.2366 12.2989 16.7678 12.7678C16.2989 13.2366 15.663 13.5 15 13.5C14.337 13.5 13.7011 13.2366 13.2322 12.7678C12.7634 12.2989 12.5 11.6631 12.5 11C12.6326 11 12.7598 10.9473 12.8536 10.8536C12.9473 10.7598 13 10.6326 13 10.5C13 10.3674 12.9473 10.2402 12.8536 10.1465C12.7598 10.0527 12.6326 10 12.5 10H11.5C11.3674 10 11.2402 10.0527 11.1464 10.1465C11.0527 10.2402 11 10.3674 11 10.5C11 10.6326 11.0527 10.7598 11.1464 10.8536C11.2402 10.9473 11.3674 11 11.5 11C11.5 11.9283 11.8687 12.8185 12.5251 13.4749C13.1815 14.1313 14.0717 14.5 15 14.5C15.9283 14.5 16.8185 14.1313 17.4749 13.4749C18.1313 12.8185 18.5 11.9283 18.5 11C18.6326 11 18.7598 10.9473 18.8536 10.8536C18.9473 10.7598 19 10.6326 19 10.5C19 10.3674 18.9473 10.2402 18.8536 10.1465C18.7598 10.0527 18.6326 10 18.5 10Z"
      fill="white"
    />
  </svg>
);
export default OrderIcon;