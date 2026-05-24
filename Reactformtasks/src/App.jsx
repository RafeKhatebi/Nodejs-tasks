import { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        skills: []
    });
    const [submitted, setSubmitted] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="App">
            <h1>React Form Tasks</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <br />
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
                <br />
                {/* Gender */}
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <h1>Skills</h1>
                {/* checkboxes */}
                <label htmlFor="html">HTML</label>
                <input type="checkbox" id="html" name="skills" value="HTML" onChange={(e) => {
                    if (e.target.checked) {
                        setFormData({ ...formData, skills: [...formData.skills, e.target.value] });
                    } else {
                        setFormData({ ...formData, skills: formData.skills.filter((skill) => skill !== e.target.value) });
                    }
                }} />
                <label htmlFor="css">CSS</label>
                <input type="checkbox" id="css" name="skills" value="CSS" onChange={(e) => {
                    if (e.target.checked) {
                        setFormData({ ...formData, skills: [...formData.skills, e.target.value] });
                    } else {
                        setFormData({ ...formData, skills: formData.skills.filter((skill) => skill !== e.target.value) });
                    }
                }} />
                <label htmlFor="js">JavaScript</label>
                <input type="checkbox" id="js" name="skills" value="JavaScript" onChange={(e) => {
                    if (e.target.checked) {
                        setFormData({ ...formData, skills: [...formData.skills, e.target.value] });
                    } else {
                        setFormData({ ...formData, skills: formData.skills.filter((skill) => skill !== e.target.value) });
                    }
                }} />
                <label htmlFor="react">React</label>
                <input type="checkbox" id="react" name="skills" value="React" onChange={(e) => {
                    // if the checkbox is checked, add the skill to the skills array, otherwise remove it from the array
                    if (e.target.checked) {
                        setFormData({ ...formData, skills: [...formData.skills, e.target.value] });
                    } else {
                        setFormData({ ...formData, skills: formData.skills.filter((skill) => skill !== e.target.value) });
                    }
                }} />
                <br />
                <button type="submit">Submit</button>
            </form>
            {submitted && <Results name={formData.name} age={formData.age} gender={formData.gender} skills={formData.skills} />}
        </div>
    )
}
function Results({ name, age, gender, skills }) {
    return (
        <div>
            <h2>Results</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Skills: {skills.join(', ')}</p>
        </div >
    )
}