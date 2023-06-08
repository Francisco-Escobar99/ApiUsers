"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../../domain/services/userService"));
const router = express_1.default.Router();
// Obtener todos los usuarios
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService_1.default.getAllUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}));
// Obtener un usuario por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const user = yield userService_1.default.getUserById(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
}));
// Crear un usuario
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const createdUserId = yield userService_1.default.createUser(user);
        res.json({ id: createdUserId });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}));
// Actualizar un usuario
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const user = req.body;
    try {
        const success = yield userService_1.default.updateUser(id, user);
        if (success) {
            res.json({ message: 'usuario actualizado exitosamente' });
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
}));
// Eliminar un usuario
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const success = yield userService_1.default.deleteUser(id);
        if (success) {
            res.json({ message: 'usuario eliminado exitosamente' });
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
}));
exports.default = router;
