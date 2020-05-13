const contactSite = () => {
    const openPopup = document.getElementById('OpenPopup');
    const modal = document.getElementById('Modal');
    const [...closePopupAll] = document.querySelectorAll('.Btn__close');
    const form = document.getElementById('form');
    const inputUserName = document.getElementById('inputUserName');
    const inputUserPhone = document.getElementById('inputUserPhone');
    const textarea = document.getElementById('textarea');
    const submit = document.getElementById('submit');
    const donePopup = document.getElementById('donePopup');
    const formBox = document.getElementById('formBox');
    let nameValid = null;
    let validTel = null

    const onTogglePopup = () => {
        submit.classList.remove('Btn__active')
        submit.classList.add('Btn__disabled')
        if (nameValid && validTel) {
            console.log('rerere')
            donePopup.classList.add('DonePopup__open');
            formBox.classList.add('FormBox__close');
        } else {
            console.log('aaaaddd')
            donePopup.classList.remove('DonePopup__open');
            formBox.classList.remove('FormBox__close');
        }
        inputUserName.value = '';
        inputUserPhone.value = '';
        textarea.value = '';
        nameValid = null;
        validTel = null;
    }

    const onOpenPopup = () => {
        modal.classList.toggle('Modal__open');
        onTogglePopup();
    }
    const closePopup = () => {
        modal.classList.remove('Modal__open');
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputUserName.value)
        console.log(inputUserPhone.value)
        console.log(textarea.value)
        onTogglePopup();
    }

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            console.log('false')
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }
    function mask(event) {
        var matrix = "+ 38(0__) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (val[3] === '3' || val[3] === '8' || val[3] === '0' || val[4] === '8' || val[4] === '0') {
            val = def
        }
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
        if (this.value.length === 19) {
            inputUserPhone.classList.remove('InputBox__invalid');
            validTel = true;
            onActiveBtnSubmit(nameValid, validTel);
        } else {
            inputUserPhone.classList.add('InputBox__invalid')
            validTel = false;
            onActiveBtnSubmit(nameValid, validTel);
        }
    };
    const validName = () => {
        if (inputUserName.value.length >= 3 && inputUserName.value.length <= 24) {
            inputUserName.classList.remove('InputBox__invalid')
            nameValid = true;
            onActiveBtnSubmit(nameValid, validTel)
        } else {
            inputUserName.classList.add('InputBox__invalid')
            nameValid = false;
            onActiveBtnSubmit(nameValid, validTel)
        }
    }
    const onActiveBtnSubmit = (name, tel) => {
        if (name && tel) {
            submit.removeAttribute('disabled')
            submit.classList.remove('Btn__disabled')
            submit.classList.add('Btn__active')
        } else {
            submit.setAttribute('disabled', 'disabled')
            submit.classList.remove('Btn__active')
            submit.classList.add('Btn__disabled')
        }
    }

    openPopup.addEventListener('click', onOpenPopup);

    closePopupAll.map(item => item.addEventListener('click', onOpenPopup, false))

    inputUserName.addEventListener('focus', validName, false);
    inputUserName.addEventListener('input', validName, false);

    inputUserPhone.addEventListener("input", mask, false);
    inputUserPhone.addEventListener("focus", mask, false);
    inputUserPhone.addEventListener("blur", mask, false);

    form.addEventListener('submit', onSubmit, false)
}

module.exports = contactSite;