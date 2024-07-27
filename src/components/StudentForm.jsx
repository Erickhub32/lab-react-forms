import { useState } from "react"


const StudentForm = () => {

    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('URL')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [program, setProgram] = useState()
    const [graduationYear, setGraduationYear] = useState(0)
    const [graduated, setGraduated] = useState(false)

    const handleFullNameChange = event => {
        const { value } = event.target
        setFullName(value)
    }

    const handleImageChange = event => {
        const { value } = event.target
        setImage(value)
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" value={fullName} type="text" placeholder="Full Name" />
                </label>

                <label>
                    Profile Image
                    <input name="image" value={image} type="url" placeholder="Profile Image" />
                </label>

                <label>
                    Phone
                    <input name="phone" value="" type="tel" placeholder="Phone" />
                </label>

                <label>
                    Email
                    <input name="email" value="" type="email" placeholder="Email" />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program">
                        <option value="">-- None --</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UXUI">UXUI</option>
                        <option value="Data">Data</option>
                    </select>
                </label>

                <label>
                    Graduation Year
                    <input
                        name="graduationYear"
                        type="number"
                        placeholder="Graduation Year"
                        minLength={4}
                        maxLength={4}
                        min={2023}
                        max={2030}
                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" checked={graduated} type="checkbox" />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>

    )
}

export default StudentForm