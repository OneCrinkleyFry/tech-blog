async function deleteFormHandler(event) {
    event.preventDefault();
    const deleteConfirm = confirm("Are you sure you'd like to delete this, it is permanent?");
    if (!deleteConfirm) return;

    const id = event.target.id;
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) document.location.replace('/dashboard');
    else alert(response.statusText);
}

document.querySelector('.delete-btn').addEventListener('click', deleteFormHandler);