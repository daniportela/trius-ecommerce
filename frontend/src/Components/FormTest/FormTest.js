import './form-test.css';

export default function FormTest() {
    return (
        <div className="form-container">
            <form action="/test" method="POST">
                <label htmlFor="name">
                    <input type="text" name="name" id="name" />
                </label>
                <label htmlFor="age">
                    <input type="number" name="age" id="age" />
                </label>
            <button type="submit">Enviar</button>
            </form>
        </div>
    );
};