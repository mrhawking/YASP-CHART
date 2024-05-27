import classes from './Emblem.module.css';

const Emblem = ({ className, children, customStyles, color }) => {
  return (
    <span className={`${classes.emblem} ${className || ''} ${classes[color] || ''}`} style={customStyles || null}>{children}</span>
  )
}

export default Emblem;

//Эмблема
//По умолчанию фон серы, можно передать несколько основных цветов, либо вписать цвет через customStyles
//Позиционирование можно передать через отдельный класс