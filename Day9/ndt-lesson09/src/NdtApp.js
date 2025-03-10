import React, { Component } from 'react'
import NdtUseState from './components/NdtUseState';
import NdtPostList from './components/NdtPostList';
import NdtCounter from './components/NdtCounter';
import NdtInputFocus from './components/NdtInputFocus';
import NdtAutoCounter from './components/NdtAutoCounter';
import NdtConfirmExit from './components/NdtConfirmExit';
import NdtThemeProvider, { NdtThemedComponent } from './components/NdtThemedComponent';

class NdtApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>K23CNT2 - Nguyễn Đức Thành - ReactJS - Hook</h1>
        <hr/>
        <NdtUseState />
        <hr/>
        <NdtPostList />
        <hr/>
        <NdtCounter />
        <hr/>
        <NdtInputFocus />
        <hr/>
        <NdtAutoCounter />
        <hr/>
        <NdtConfirmExit />
        <hr/>
        <NdtThemeProvider>
          <NdtThemedComponent />
        </NdtThemeProvider>
      </div>
    )
  }
}

export default NdtApp;