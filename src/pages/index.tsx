import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PasswordComponent from './password'

// zod = 검사해주는 수단
// schema 객체로 폼 필드의 규칙을 정의
const schema = z.object({
    email: z
        .string()
        .email({ message: '⚠️ 유효한 이메일 주소를 입력해 주세요.' })
        .min(1, { message: '⚠️ 하나 이상의 글자를 입력해 주세요.' })
        .max(50, { message: '⚠️ 글자 수 초과' }),
    name: z.string().min(1, { message: '⚠️ 하나 이상의 글자를 입력해주세요.' }),
    password: z
        .string()
        .min(1, { message: '⚠️ 하나 이상의 글자를 입력해주세요.' }),
    check: z.string().min(1, { message: '⚠️ 비밀번호를 확인해 주세요.' }),
    age: z.preprocess(
        Number,
        z
            .number()
            .min(10, { message: '⚠️ 10살 미만은 가입할 수 없어요.' })
            .max(60, { message: '⚠️ 60세 이상은 가입할 수 없어요.' })
    ),
    address: z
        .string()
        .min(1, { message: '⚠️ 하나 이상의 글자를 입력해주세요.' }),
    phone: z.preprocess(
        Number,
        z.number().min(1, { message: '⚠️ 하나 이상의 숫자를 입력해주세요.' })
    ),
    path: z.string(),
})

type SchemaType = z.infer<typeof schema>

export default function HookFormPage() {
    const {
        register, // 폼 필드를 등록하는 함수
        handleSubmit, // 폼 제출을 처리하는 함수
        formState: { errors }, // 폼의 상태를 나타내는 객체
    } = useForm<SchemaType>({
        resolver: zodResolver(schema),
    })

    // const handleSuccess = (data: SchemaType) => {
    //     console.log(data);
    //   };

    const handleSuccess: SubmitHandler<SchemaType> = (data) => {
        alert('회원가입이 완료되었습니다.')
    }

    const handleFail: SubmitErrorHandler<SchemaType> = (errors) => {
        console.log(errors)
    }

    return (
        <form
            id="form"
            onSubmit={handleSubmit(handleSuccess, handleFail)}
            className="flex flex-col  items-center gap-6"
        >
            <div className="relative z-0 flex  flex-col md:flex-row justify-center items-center gap-5 text-2xl ">
                <div
                    className="z=0 w-[350px] h-[600px] rounded-3xl bg-white bg-opacity-40 
                border-8  border-purple-700 gap-2 flex flex-col  "
                >
                    <div
                        className="z-0 w-full h-[350px] rounded-t-2xl bg-center bg-cover bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/564x/33/98/6c/33986ccfe5aeabc1efd9f24a90ec9b74.jpg')",
                        }}
                    ></div>
                    <div
                        className="absolute z-2 w-[400px] h-[350px] bg-no-repeat  bg-center bg-contain mr-40 mt-5 "
                        style={{
                            backgroundImage:
                                "url('https://github.com/mimieee122/mslogo/blob/main/%EB%B3%B4%EB%9D%BC%EC%97%AC%EC%9E%90.png?raw=true')",
                        }}
                    ></div>
                    <label
                        htmlFor="age"
                        className="flex flex-row items-center h-12 m-2"
                    >
                        <div className="bg-purple-600 rounded-md w-10 text-center">
                            ❔
                        </div>
                        <input
                            id="age"
                            placeholder="age"
                            type="number"
                            {...register('age')}
                            className="m-4 w-full h-35  bg-purple-300 bg-opacity-50 "
                        />
                    </label>
                    {errors.age && (
                        <p className="error-message">{errors.age.message}</p>
                    )}

                    <label
                        htmlFor="address"
                        className="flex flex-row items-center h-12 m-2"
                    >
                        <div className=" bg-purple-600 rounded-md w-10 text-center">
                            ❔
                        </div>

                        <input
                            id="address"
                            placeholder="address"
                            {...register('address')}
                            className="m-4 w-full h-35  bg-purple-300 bg-opacity-50 "
                        />
                    </label>
                    {errors.address && (
                        <p className="error-message">
                            {errors.address.message}
                        </p>
                    )}
                    <label
                        htmlFor="phone"
                        className="flex flex-row items-center h-12 m-2"
                    >
                        <div className="bg-purple-600 rounded-md w-10 text-center">
                            ❔
                        </div>

                        <input
                            id="phone"
                            placeholder="phone"
                            {...register('phone')}
                            className="m-4 w-full h-35  bg-purple-300 bg-opacity-50 "
                        />
                    </label>
                    {errors.phone && (
                        <p className="error-message">{errors.phone.message}</p>
                    )}
                    <div className="w-full h-10 rounded-b-md bg-purple-700  flex flex-row justify-between">
                        <div>◀️</div>
                        <div>✉️</div>
                    </div>
                </div>

                <div
                    className="z=0 w-[350px] h-[600px] rounded-3xl bg-white bg-opacity-40 
             border-8  border-purple-700 gap-2 flex flex-col  "
                >
                    <div
                        className="w-full h-[350px] rounded-t-2xl bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center"
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/564x/e6/27/ac/e627ac9dbda722a8676142a86e78d425.jpg')",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            }}
                            className=" relative  w-[300px] h-[300px] rounded-md bg-white  text-wrap font-extrabold text-3xl flex flex-col justify-end items-end"
                        >
                            <div
                                className="absolute z-2 w-[300px] h-[300px] bg-contain bg-no-repeat bg-left"
                                style={{
                                    backgroundImage:
                                        "url('https://github.com/mimieee122/mslogo/blob/main/%ED%8D%BC%EC%97%89.png?raw=true')",
                                }}
                            ></div>
                            <div className="flex flex-col gap-5 items-end text-purple-700">
                                <p className="hi">HI</p>
                                <p className="hi">SIGN IN</p>
                            </div>
                        </div>
                    </div>

                    {errors.check?.message && (
                        <p className="error-message">{errors.check.message}</p>
                    )}
                    <PasswordComponent />
                    <div className="mt-16 w-full h-10 rounded-b-md bg-purple-700 flex flex-row justify-between">
                        <div>◀️</div>
                        <div>✉️</div>
                    </div>
                </div>
                <div
                    className="z=0 w-[350px] h-[600px] rounded-3xl bg-white bg-opacity-40 
                 border-8  border-purple-700 gap-2 flex flex-col  "
                >
                    <div
                        className="w-full h-[350px] rounded-t-2xl bg-center bg-cover bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/564x/06/2d/b0/062db00fdc354b1f793373bc7e31752e.jpg')",
                        }}
                    ></div>
                    <label
                        htmlFor="email"
                        className="flex flex-row items-center h-12 m-2"
                    >
                        <div className="bg-purple-600 rounded-md w-10 text-center">
                            📬
                        </div>
                        <input
                            id="email"
                            placeholder="email"
                            type="email"
                            {...register('email')}
                            className="m-4 w-full h-35  bg-purple-300 bg-opacity-50 "
                        />
                    </label>
                    {errors.email && (
                        <p className="error-message">{errors.email.message}</p>
                    )}
                    <label
                        htmlFor="path"
                        className="flex flex-row items-center h-12 m-2"
                    >
                        <div className="bg-purple-600 rounded-md w-10 text-center">
                            👟
                        </div>
                        <select
                            id="path"
                            {...register('path')}
                            className="m-4 w-full h-35  bg-purple-300 bg-opacity-50 "
                        >
                            <option>검색</option>
                            <option>광고</option>
                            <option>지인</option>
                        </select>
                    </label>
                    <div className="w-full h-10 rounded-b-md bg-purple-700 mt-12 flex flex-row justify-between">
                        <div>◀️</div>
                        <div>✉️</div>
                    </div>
                </div>
            </div>
            <input
                type="submit"
                className="w-[350px] border-4 bg-purple-700 opacity-45 border-black rounded-md m-4 font-extrabold text-2xl"
            />
        </form>
    )
}
