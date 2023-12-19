import Button from '../buttons/button'

export default function Section_nav_buttons() {

    return (
      <>
        <div className='my-10 flex justify-between gap-5'>
          <Button haveLink={true} isOutline={true} text={'Todos'} setClass={'py-4'} link={'/productos/sandwiches'}/>
          <Button haveLink={true} isOutline={true} text={'Menu'} setClass={'py-4'} link={'/productos/menu'}/>
          <Button haveLink={true} isOutline={true} text={'Carne'} setClass={'py-4'} link={'/productos/hamburguesas-de-carne'}/>
          <Button haveLink={true} isOutline={true} text={'Pollo'} setClass={'py-4'} link={'/productos/hamburguesas-de-pollo'}/>
          <Button haveLink={true} isOutline={true} text={'Happy Meal'} setClass={'py-4'} link={'/productos/happy-meal'}/>
        </div>
      </>
    )
  }