const user = {
  name: "Juan Perez",
  email: "juan.perez@example.com",
  registeredCourses: [
    { id: 1, name: "Curso de React", title: "Aprende React desde cero", imageUrl: "../../Images/1.jpg" },
    { id: 2, name: "Curso de Node.js", title: "Desarrollo con Node.js", imageUrl: "../../Images/2.jpg" },
    { id: 3, name: "Curso de CSS", title: "Maquetación con CSS", imageUrl: "../../Images/3.jpg" },
  ],
  stats: [
    { id: 1, value: 10, label: "Cursos completados" },
    { id: 2, value: 5, label: "Cursos en progreso" },
    { id: 3, value: 3, label: "Certificados obtenidos" },
  ],
  notifications: [
    { id: 1, message: "Nueva actualización en el curso de React" },
    { id: 2, message: "Certificado disponible para el curso de Node.js" },
    { id: 3, message: "Nuevo curso disponible: Desarrollo con Python" },
  ],
};

export default user;
