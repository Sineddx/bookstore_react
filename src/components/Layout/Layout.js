import styles from "./Layout.module.css";
function Layout(props) {
  return (
    <>
      <div>{props.header}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </>
  );
}
export default Layout;
