/* eslint-disable */
import React, { useState } from 'react'

const CheckboxList = () => {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Dogs', checked: false },
        { id: 2, label: 'Cats', checked: false },
        { id: 3, label: 'Cows', checked: false },
        { id: 4, label: 'Deers', checked: false }
    ])

    const [isAllSelected, setIsAllSelected] = useState(false)

    const handleChecked = (id) => {
        setCheckboxes(
            checkboxes.map((check) =>
                check.id === id
                    ? { ...check, checked: !check.checked }
                    : { ...check }
            )

        );
    }


    const handleSelectAll = () => {
        setIsAllSelected(!isAllSelected)
        setCheckboxes(
            checkboxes.map((check) => ({ ...check, checked: !check.checked })
            )

        );
    }

    return (
        <div>
            <div data-testid="checkbox-container">
                {checkboxes?.map((checkbox, index) => (
                    <div key={checkbox?.id}>
                        <input
                            data-testid={`checkbox-${index + 1}`}
                            type="checkbox"
                            checked={checkbox?.checked}
                            onChange={() => handleChecked(checkbox?.id)}
                        />
                        {checkbox?.label}
                    </div>
                ))}
            </div>
            <button data-testid="button" onClick={handleSelectAll}>{isAllSelected ? "Unchecked All" : "Checked All"}</button>
        </div>
    );
}

export default CheckboxList


// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;
// 	gap: 10px;
// 	margin: 24px;
// `

// const CheckboxContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 5px;
// `

// const CheckboxLabel = styled.label`
// 	display: flex;
// 	align-items: center;
// 	gap: 5px;
// `

// const SelectAllButton = styled.button`
// 	padding: 10px 20px;
// 	font-size: 18px;
// 	border: none;
// 	border-radius: 4px;
// 	background-color: #333;
// 	color: #fff;
// 	cursor: pointer;
// 	margin-top: 24px;

// 	&:hover {
// 		opacity: 0.8;
// 	}
// `
