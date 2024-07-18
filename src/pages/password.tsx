// PasswordComponent.js
import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { passwordAtom, checkAtom } from '@/utility/atom'

function PasswordComponent() {
    const [password, setPassword] = useAtom(passwordAtom)
    const [check, setCheck] = useAtom(checkAtom)
    const [error, setError] = React.useState('')

    useEffect(() => {
        if (password === '' || check === '') {
            setError('')
            return
        }
        if (password !== check) {
            setError('비밀번호가 일치하지 않습니다.')
        } else {
            setError('')
        }
        if (password !== '' && check !== '' && password === check) {
            return
        }
    }, [password, check])

    return (
        <div>
            <label
                htmlFor="password"
                className="flex flex-row items-center h-12 m-2"
            >
                <div className="bg-purple-600 rounded-md w-10 text-center">
                    🔐
                </div>
                <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    className="m-4 w-full h-35 bg-purple-300 bg-opacity-50"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <label
                htmlFor="check"
                className="flex flex-row items-center h-12 m-2"
            >
                <div className="bg-purple-600 rounded-md w-10 text-center">
                    🔐
                </div>
                <input
                    id="check"
                    placeholder="Confirm Password"
                    type="password"
                    className="m-4 w-full h-35 bg-purple-300 bg-opacity-50"
                    value={check}
                    onChange={(e) => setCheck(e.target.value)}
                />
            </label>
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}

export default PasswordComponent
