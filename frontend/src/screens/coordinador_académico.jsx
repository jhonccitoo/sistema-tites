import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Upload, CheckCircle, XCircle, User } from 'lucide-react';

const CoordinardorAcademico = () => {
    const thesisGroups = [
        { id: 'F.003', students: ['SAMANIEGO PAQUIRACHI', 'PEREZ QUISPE'] },
        { id: 'F.004', students: ['SAMANIEGO PAQUIRACHI', 'PEREZ QUISPE'] }
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-green-900 text-white flex flex-col items-center py-8">
                <img src="/user-placeholder.png" alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                <h2 className="text-lg font-bold">Jorge Carpio</h2>
                <span className="text-sm">COORDINADOR ACADÉMICO</span>
                <nav className="mt-8 w-full">
                    <ul>
                        <li className="px-4 py-2 bg-green-700 rounded-lg mb-2 text-center">Inicio</li>
                        <li className="px-4 py-2 bg-green-500 rounded-lg mb-2 text-center">Revision</li>
                        <li className="px-4 py-2 bg-green-700 rounded-lg mb-2 text-center">Firmas</li>
                        <li className="px-4 py-2 bg-green-700 rounded-lg mb-2 text-center">Carpeta Final</li>
                    </ul>
                </nav>
                <button className="mt-auto mb-4 px-4 py-2 bg-green-700 rounded-lg">Salir</button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {thesisGroups.map((group) => (
                    <div key={group.id} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{group.id}</h2>
                        {group.students.map((student, index) => (
                            <Card key={index} className="flex items-center justify-between mb-4 bg-green-200 rounded-2xl shadow-md">
                                <CardContent className="flex-1 p-4">
                                    <p className="text-xl font-bold">{student}</p>
                                    <span className="text-sm text-gray-700">Tesistas</span>
                                </CardContent>
                                <div className="flex gap-2 px-4">
                                    <Button className="bg-green-600 hover:bg-green-700 rounded-lg">
                                        <Download className="text-white" size={24} />
                                    </Button>
                                    <Button className="bg-green-600 hover:bg-green-700 rounded-lg">
                                        <Upload className="text-white" size={24} />
                                    </Button>
                                    <Button className="bg-black hover:bg-gray-800 rounded-lg">
                                        <CheckCircle className="text-white" size={24} />
                                    </Button>
                                    <Button className="bg-white hover:bg-gray-300 rounded-lg">
                                        <XCircle className="text-black" size={24} />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                ))}
            </main>
        </div>
    );
};

export default CoordinardorAcademico;
