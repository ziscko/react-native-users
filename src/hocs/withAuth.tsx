import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from '../store/store'
import {login, logout} from '../store/authSlice'

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userName: state.auth.userName,
})

const mapDispatchToProps = {
  login,
  logout,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P & PropsFromRedux>,
) => {
  const ComponentWithRedux = (props: P & PropsFromRedux) => (
    <WrappedComponent {...(props as any)} />
  )
  return connector(ComponentWithRedux as any)
}

export default withAuth
