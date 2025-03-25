function renderCards() {
    const container = document.getElementById("cardContainer");
    container.innerHTML = "";

    cardsData.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerHTML = `
            <a href=${card.link} ${card.blank?'target="_blank"':""}><div class="card-image">
                <img src="${card.imagen}" alt="Vista previa">
            </div>
            <div class="card-content">
                <h3>${card.titulo}</h3>
                <p>${card.descripcion}</p>
            </div>
            </div></a>
        `;
        container.appendChild(cardDiv);
    });
}

function handleImageUpload(input, index) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        cardsData[index].imagen = reader.result;
        renderCards(); // Actualiza la vista
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function updateTitle(input, index) {
    cardsData[index].titulo = input.value;
}

function updateDescription(input, index) {
    cardsData[index].descripcion = input.value;
}

function saveCard(index) {
    const card = cardsData[index];
    if (
        card.imagen ===
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    ) {
        alert("Debes cargar una imagen antes de guardar");
        return;
    }

    alert(`Tarjeta guardada:\n${JSON.stringify(card, null, 2)}`);
    // Aquí puedes implementar la lógica para guardar en el servidor
}

function deleteCard(index) {
    if (confirm("¿Seguro que quieres eliminar esta tarjeta?")) {
        cardsData.splice(index, 1);
        renderCards();
    }
}

function addNewCard(title = "", img = "", descripcion = "") {
    cardsData.push({
        titulo: `Tarjeta ${title}`,
        imagen: imagen,
        descripcion: descripcion,
    });
    renderCards();
}
export default renderCards;