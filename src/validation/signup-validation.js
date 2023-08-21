import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export function useValidation() {
    const { handleSubmit, resetForm } = useForm();
    const { value: username, errorMessage: usernameError } = useField('username', validateField);
    const { value: email, errorMessage: emailError } = useField('email', validateField);
    const { value: phone, errorMessage: phoneError } = useField('phone', validateField);
    const { value: password, errorMessage: passwordError } = useField('password', validateField);
    const { value: confirmpassword, errorMessage: conpasswordError } = useField('confirmpassword', validateField);
    const toast = useToast();

    // Additional custom validation logic for specific fields
    function validateField(value, fieldName) {
        if (!value || value === '') {
            return `${fieldName.field} is required.`;
        }

        if (fieldName.field === 'username') {
            if (value.length < 3) {
                return `User name must be at least 3 characters.`;
            }
        }

        if (fieldName.field === 'email' && !isValidEmail(value)) {
            return `Invalid email address for ${fieldName.field}.`;
        }

        if (fieldName.field === 'password' || fieldName.field === 'confirmpassword') {
            if (value.length < 8) {
                return `${fieldName.field} must be at least 8 characters.`;
            }
            
            if (fieldName.field === 'confirmpassword' && value !== password.value) {
                return `Confirm password does not match.`;
            }
        }

        // Validation passes if no error conditions are met
        return true;
    }

    // Email validation logic here
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const onSubmit = handleSubmit(async (values) => {console.log(values)
        try {
            await Promise.all([
                usernameError.value || username.validate(),
                emailError.value || email.validate(),
                phoneError.value || phone.validate(),
                passwordError.value || password.validate(),
                conpasswordError.value || confirmpassword.validate(),
            ]);

            // Validation passed, proceed with submission
            toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'Form data submitted!', life: 3000 });
            resetForm();
        } catch (error) {
            console.error('Validation error:', error);
        }
    });

    return {
        username,
        email,
        phone,
        password,
        confirmpassword,
        usernameError,
        emailError,
        phoneError,
        passwordError,
        conpasswordError,
        onSubmit,
    };
}