import Button from '../buttons/button'
import Button_navLink from '../buttons/button_navLink'

export default function Section_nav_buttons() {

    return (
      <>
        <div className='my-10 flex justify-between gap-5'>
          <Button_navLink isOutline={true} text={'Todos'} setClass={'py-4'} link={'/productos/sandwiches'}/>
          <Button_navLink isOutline={true} text={'Menu'} setClass={'py-4'} link={'/productos/menu'}/>
          <Button_navLink isOutline={true} text={'Carne'} setClass={'py-4'} link={'/productos/hamburguesas-de-carne'}/>
          <Button_navLink isOutline={true} text={'Pollo'} setClass={'py-4'} link={'/productos/hamburguesas-de-pollo'}/>
          <Button_navLink isOutline={true} text={'Happy Meal'} setClass={'py-4'} link={'/productos/happy-meal'}/>
        </div>
      </>
    )
  }