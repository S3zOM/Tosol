"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  FlaskConical,
  Lightbulb,
  Ruler,
  FileText,
  Users,
  Target,
  DollarSign,
} from "lucide-react";

export default function ProjectProposalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            Төслийн санал: Сургуулийн лабораторийн өрөөг шинэчлэх
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 max-w-3xl mx-auto mb-6"
          >
            Сургуулийн лабораторийг орчин үеийн стандартын дагуу шинэчилж,
            сургалтын үр ашиг болон аюулгүй байдлыг нэмэгдүүлэх цогц төсөл.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Button className="rounded-2xl px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
              Тавтай морилно уу
            </Button>
          </motion.div>
        </section>

        {/* Project Rationale and Importance */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Төслийн үндэслэл ба ач холбогдол
          </motion.h2>
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="space-y-6 text-slate-300">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Одоогийн тулгамдсан асуудлууд
                  </h3>
                  <p className="leading-relaxed">
                    Одоогоор манай сургуулийн лабораторийн өрөө нь хуучирсан
                    тоног төхөөрөмжтэй, стандарт бус зохион байгуулалттай,
                    аюулгүй байдлын шаардлага хангахгүй байгаа нь сурагчдыг
                    дадлага туршлага олж авахад, багш нарыг үр дүнтэй хичээл
                    заахад саад болж байна. Лабораторийн орчин нь зөвхөн туршилт
                    хийх газар бус, сурагчдын судалгааны сэтгэлгээ болон бүтээлч
                    чадварыг хөгжүүлэх чухал орчин юм.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">
                    Төслийн зорилго
                  </h3>
                  <p className="leading-relaxed">
                    Энэхүү төслийн зорилго нь лабораторийн өрөөг орчин үеийн
                    боловсролын стандартын дагуу шинэчилж, тоног төхөөрөмжийг
                    сайжруулснаар сурагчдын практик чадварыг нэмэгдүүлж, багш
                    нарын хичээлийн чанарыг дээшлүүлэхэд оршино. Төслийн хүрээнд
                    лабораторийн дотоод зохион байгуулалтыг сайжруулж, аюулгүй
                    ажиллагааны тоног төхөөрөмж, шинэ туршилтын багаж хэрэгсэл,
                    сургалтын таатай орчныг бүрдүүлнэ.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">
                    Хүлээгдэж буй үр дүн
                  </h3>
                  <p className="leading-relaxed">
                    Төслийн үр дүнд сурагчид онолын мэдлэгээ бодит туршилтаар
                    баталгаажуулах илүү их боломжтой болж, судалгаанд суурилсан
                    боловсролын нөхцөл бүрдэнэ. Мөн багш нар шинэ тоног
                    төхөөрөмжийг ашиглан илүү сонирхолтой, үр дүнтэй хичээл заах
                    боломжтой болно. Энэхүү төсөл нь сургуулийн боловсролын
                    чанарыг сайжруулж, ирээдүйн шинжлэх ухаанд чиглэсэн
                    мэргэжилтнүүдийг бэлтгэхэд чухал ач холбогдолтой.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                    Стратегийн ач холбогдол
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    Энэхүү шинэчлэл нь боловсролын дэд бүтцэд хийгдэх чухал
                    хөрөнгө оруулалт бөгөөд сурагчдын сургалтын үр дүн, багш
                    нарын мэргэжлийн хөгжил болон шинжлэх ухааны боловсролын
                    байгууллагын чанарт урт хугацааны ашиг тусаа өгнө.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Brief Project Introduction */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Төслийн товч танилцуулга
          </motion.h2>
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50 rounded-2xl">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <Lightbulb className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  Энгийн тайлбар
                </h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Энэхүү төсөл нь сургуулийн лабораторийн өрөөг шинэчилж, орчин
                үеийн тоног төхөөрөмжөөр ханган, илүү аюулгүй, цэвэрхэн, тав
                тухтай орчин бүрдүүлэх зорилготой. Ингэснээр сурагчид туршилт
                хийхдээ илүү сонирхолтой, аюулгүй орчинд суралцах боломжтой
                болно.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-3xl mb-2">🔬</div>
                  <h4 className="font-semibold text-green-400 mb-2">
                    Орчин үеийн тоног төхөөрөмж
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Шинэ үеийн лабораторийн багаж хэрэгсэл
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-blue-400 mb-2">
                    Аюулгүй байдал нэн тэргүүнд
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Сайжруулсан аюулгүй ажиллагааны дүрэм, тоног төхөөрөмж
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <div className="text-3xl mb-2">🎓</div>
                  <h4 className="font-semibold text-purple-400 mb-2">
                    Илүү сайн сургалт
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Сургалтын үр дүн ба оролцоог сайжруулна
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Information Cards */}
<section className="grid md:grid-cols-4 gap-6 mb-16">
  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6 text-center">
      <FileText className="mb-4 mx-auto text-blue-400" size={32} />
      <h3 className="text-lg font-semibold mb-2 text-white">Төслийн төрөл</h3>
      <p className="text-slate-300 text-sm">
        Технологийн туршилт ба хөгжил
      </p>
    </CardContent>
  </Card>

  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6 text-center">
      <DollarSign className="mb-4 mx-auto text-green-400" size={32} />
      <h3 className="text-lg font-semibold mb-2 text-white">Санхүүжилт</h3>
      <p className="text-slate-300 text-sm">50,000,000 MNT</p>
    </CardContent>
  </Card>

  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6 text-center">
      <Target className="mb-4 mx-auto text-purple-400" size={32} />
      <h3 className="text-lg font-semibold mb-2 text-white">Хугацаа</h3>
      <p className="text-slate-300 text-sm">12 сар</p>
    </CardContent>
  </Card>

  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6 text-center">
      <Users className="mb-4 mx-auto text-orange-400" size={32} />
      <h3 className="text-lg font-semibold mb-2 text-white">Чиглэл</h3>
      <p className="text-slate-300 text-sm">Инженерчлэл ба технологи</p>
    </CardContent>
  </Card>
</section>

       {/* Project Objectives */}
<section className="grid md:grid-cols-3 gap-6 mb-16">
  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6">
      <Ruler className="mb-4 text-blue-400" size={28} />
      <h2 className="text-xl font-semibold mb-2 text-white">Засварын стандарт</h2>
      <p className="text-slate-300">
        Лабораторийн өрөөг орчин үеийн боловсролын болон аюулгүй байдлын
        стандартын дагуу шинэчлэх.
      </p>
    </CardContent>
  </Card>

  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6">
      <FlaskConical className="mb-4 text-green-400" size={28} />
      <h2 className="text-xl font-semibold mb-2 text-white">
        Тоног төхөөрөмжийг сайжруулах
      </h2>
      <p className="text-slate-300">
        Шинэ туршилтын хэрэгсэл, аюулгүй ажиллагааны тоног төхөөрөмж,
        лабораторийн тавилга суурилуулах.
      </p>
    </CardContent>
  </Card>

  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6">
      <CheckCircle className="mb-4 text-purple-400" size={28} />
      <h2 className="text-xl font-semibold mb-2 text-white">Чанарыг сайжруулах</h2>
      <p className="text-slate-300">
        Практик ур чадвар, судалгаанд суурилсан боловсрол болон нийт
        сургалтын үр дүнг нэмэгдүүлэх.
      </p>
    </CardContent>
  </Card>
</section>

       {/* Implementation Plan */}
<section className="mb-16">
  <motion.h2
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-3xl font-bold mb-6"
  >
    Хэрэгжилтийн төлөвлөгөө
  </motion.h2>
  <div className="grid md:grid-cols-2 gap-6">
    <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            1
          </div>
          <h3 className="text-xl font-semibold text-white">
            Төлөвлөлт ба бэлтгэл
          </h3>
        </div>
        <p className="text-slate-400 text-sm mb-3">1-р сар</p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Талбайн үнэлгээ, төлөвлөлт хийх</li>
          <li>Төслийн нарийвчилсан шаардлагыг боловсруулах</li>
          <li>Шаардлагатай зөвшөөрөл, баталгаажуулалтыг авах</li>
          <li>Худалдан авалтын төлөвлөгөө, төсвийн хуваарилалт хийх</li>
          <li>Төслийн баг бүрдүүлж, үүрэг хариуцлага хуваарилах</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            2
          </div>
          <h3 className="text-xl font-semibold text-white">
            Засвар ба дэд бүтэц
          </h3>
        </div>
        <p className="text-slate-400 text-sm mb-3">2–4-р сар</p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Бүтцийн засварыг бүрэн дуусгах</li>
          <li>Цахилгаан болон сантехникийн шинэчлэл хийх</li>
          <li>Агааржуулалт ба аюулгүй байдлын систем суурилуулах</li>
          <li>Дотоод засал, будгийг хийх</li>
          <li>Лабораторийн тавилга, тоноглол суурилуулах</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            3
          </div>
          <h3 className="text-xl font-semibold text-white">
            Тоног төхөөрөмж ба суурилуулалт
          </h3>
        </div>
        <p className="text-slate-400 text-sm mb-3">5–8-р сар</p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Лабораторийн тоног төхөөрөмж худалдан авч, хүргэх</li>
          <li>Микроскоп, центрифуг, анализатор суурилуулах</li>
          <li>Компьютерийн систем, программ хангамж тохируулах</li>
          <li>Бүх тоног төхөөрөмжийг шалгаж, тохируулах</li>
          <li>Аюулгүй ажиллагааны журам, протокол тогтоох</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            4
          </div>
          <h3 className="text-xl font-semibold text-white">
            Сургалт ба үнэлгээ
          </h3>
        </div>
        <p className="text-slate-400 text-sm mb-3">9–12-р сар</p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Ажилтнуудад зориулсан сургалтын хөтөлбөр зохион байгуулах</li>
          <li>Стандарт ажиллагааны заавар боловсруулах</li>
          <li>Эцсийн аюулгүй байдлын шалгалт хийх</li>
          <li>Төслийн үр дүн, нөлөөллийг үнэлэх</li>
          <li>Засвар үйлчилгээ, дэмжлэгийн систем бий болгох</li>
        </ul>
      </CardContent>
    </Card>
  </div>
          {/* Timeline Overview */}
          <Card className="bg-gradient-to-r from-slate-800/70 to-slate-900/70 border-slate-600 rounded-2xl mt-8">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-center text-blue-400">
                12 сарын төслийн хугацааны тойм
              </h4>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Төлөвлөлт</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full w-1/2"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Засвар</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Суурилуулалт</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                    <div className="bg-orange-500 h-2 rounded-full w-full"></div>
                  </div>
                  <p className="text-slate-300 text-sm">Сургалт</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Goals and Objectives */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Төслийн зорилго, зорилтууд
          </motion.h2>
          <div className="space-y-6">
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Ерөнхий зорилго
                </h3>
                <p className="text-slate-300 text-lg">
                  Сургуулийн лабораторийн орчныг сайжруулж, боловсролын чанарыг
                  нэмэгдүүлэх.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Төслийн зорилтууд
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Лабораторийн өрөөг стандартын дагуу шинэчлэх</li>
                  <li>Шинэ тоног төхөөрөмж суурилуулах</li>
                  <li>Аюулгүй байдлын нөхцөлийг хангах</li>
                  <li>Багш, сурагчдын ашиглах чадварыг нэмэгдүүлэх</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  Төслийн нөлөө
                </h3>
                <p className="text-slate-300">
                  Сурагчид, багш нар болон нийт сургууль сайжруулсан сургалтын
                  орчин, боловсролын илүү өндөр үр дүнгээс ашиг хүртэнэ.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Situation */}
<section className="mb-16">
  <motion.h2
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-3xl font-bold mb-6"
  >
    Одоогийн байдал
  </motion.h2>
  <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
    <CardContent className="p-6">
      <div className="text-center">
        <FileText className="mx-auto mb-4 text-orange-400" size={48} />
        <p className="text-slate-300 mb-4">
          Лабораторийн одоогийн нөхцөл байдлын үнэлгээ болон баримтжуулалт.
        </p>
        <p className="text-slate-400 text-sm mb-6">
          (Одоогийн лабораторийн зураг, баримт бичгийг энд хавсаргана.)
        </p>
        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg mb-6">
          <p className="text-slate-300">
            Одоогийн лаборатори нь орчин үеийн боловсролын болон аюулгүй байдлын стандартуудыг хангахын тулд шинэчлэл шаардлагатай.
          </p>
        </div>

       {/* Photo gallery */}
<div className="grid grid-cols-4 gap-2 mt-4">
  <img
    src="pic1.jpg"
    alt="Current lab 1"
    className="w-full h-24 object-cover rounded-md"
  />
  <img
    src="pic2.jpg"
    alt="Current lab 2"
    className="w-full h-24 object-cover rounded-md"
  />
  <img
    src="pic3.jpg"
    alt="Current lab 3"
    className="w-full h-24 object-cover rounded-md"
  />
  <img
    src="pic4.jpg"
    alt="Current lab 4"
    className="w-full h-24 object-cover rounded-md"
  />
</div>
      </div>
    </CardContent>
  </Card>
</section>

        {/* Project Results */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Төслийн үр дүн
          </motion.h2>
          <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-400">
                    Хүлээгдэж буй үр дүн
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Орчин үеийн лабораторийн орчин</li>
                    <li>
                      • Шинэчлэгдсэн тоног төхөөрөмж, аюулгүй байдлын систем
                    </li>
                    <li>• Боловсролын чанар сайжрах</li>
                    <li>• Сурагчдын оролцоо нэмэгдэх</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">
                    Урт хугацааны ашиг тус
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Судалгааны чадавхи сайжрах</li>
                    <li>• Практик сургалт нэмэгдэх</li>
                    <li>• Сурагчдын амжилт өсөх</li>
                    <li>• Тогтвортой боловсролын сайжруулалт</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Team */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Project Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Leader */}
            <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-600/50 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-bl-lg">
                TEAM LEADER
              </div>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mb-4 mx-auto">
                  👨‍🏫
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Zorigtbaatar]
                </h3>
                <p className="text-yellow-400 text-center text-sm mb-3">
                  Төслийн ахлагч
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p></p>
                  <p>
                    <strong>Туршлага:</strong> Сурагч
                  </p>
                  <p>
                    <strong>Үүрэг:</strong> Төслийн ерөнхий зохицуулалт,
                    оролцогч талуудын удирдлага, эцсийн баталгаажуулалт
                  </p>
                </div>
              </CardContent>
            </Card>
            {/* Team Member 1 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔬
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Oyuntugs]
                </h3>
                <p className="text-blue-400 text-center text-sm mb-3">
                  [Сурагч]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Шинэ Өнөөдөр]
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </CardContent>
            </Card>
            {/* Team Member 2 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔬
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Orgil]
                </h3>
                <p className="text-blue-400 text-center text-sm mb-3">
                  [Сурагч]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Шинэ Өнөөдөр]
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </CardContent>
            </Card>
            {/* Team Member 3 */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔬
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  [Huslen]
                </h3>
                <p className="text-blue-400 text-center text-sm mb-3">
                  [Сурагч]
                </p>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p>
                    <strong>Харьяалах сургууль:</strong> [Шинэ Өнөөдөр]
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Risks Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Эрсдэлүүд
          </motion.h2>
          <div className="space-y-6">
            <Card className="bg-red-900/20 border-red-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 inline-block"></span>
                  Төсөв ба Санхүүжилтийн Эрсдэлүүд
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Төсөв хэтрэх магадлал</li>
                  <li>Санхүүжилт хойшлох буюу дутагдах</li>
                  <li>Үнэ өсөх, зах зээлийн хэлбэлзэл</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-yellow-900/20 border-yellow-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 inline-block"></span>
                  Цаг хугацааны эрсдэл
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Засварын ажил удаашрал</li>
                  <li>Тоног төхөөрөмжийн нийлүүлэлтийн саатал</li>
                  <li>Хуваариас хазайх</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-purple-900/20 border-purple-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 inline-block"></span>
                  Техникийн болон үйл ажиллагааны эрсдэл
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Тоног төхөөрөмжийн эвдрэл</li>
                  <li>Сургалт хангалтгүй</li>
                  <li>Аюулгүй байдлын зөрчил</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-orange-900/20 border-orange-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-400 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 inline-block"></span>
                  Нийлүүлэлтийн сүлжээ ба худалдан авалтын эрсдэл
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Тоног төхөөрөмжийн саатал:</strong> Олон улсын
                    нийлүүлэгчдээс үйлдвэрлэл эсвэл тээвэрлэлтийн саатал гарах
                  </li>
                  <li>
                    <strong>Чанарын асуудал:</strong> Лабораторийн стандартад
                    нийцэхгүй чанар муутай тоног төхөөрөмж
                  </li>
                  <li>
                    <strong>Импортын хязгаарлалт:</strong> Шинжлэх ухааны тоног
                    төхөөрөмжид гаалийн саатал эсвэл зохицуулалтын саад бэрхшээл
                    үүсэх
                  </li>
                  <li>
                    <strong>Нийлүүлэгчийн найдвартай байдал:</strong> Нийлүүлэгч
                    дампуурах эсвэл амласнаа биелүүлэхгүй байх
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-slate-600 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></span>
                  Гадаад ба орчны эрсдэлүүд
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>
                    <strong>Зохицуулалтын өөрчлөлт:</strong> Төслийн явцад шинэ
                    аюулгүй байдал эсвэл боловсролын стандартууд хэрэгжих
                  </li>
                  <li>
                    <strong>Улс төрийн хүчин зүйлс:</strong> Сургуулийн
                    удирдлага эсвэл санхүүжилтийн чиглэлийн өөрчлөлт
                  </li>
                  <li>
                    <strong>Байгалийн гамшиг:</strong> Барилгын явцад
                    байгууламжид хохирол учруулж болзошгүй үйл явдлууд
                  </li>
                  <li>
                    <strong>Эдийн засгийн тогтворгүй байдал:</strong> Валютын
                    ханшийн хэлбэлзэл импортын зардалд нөлөөлөх
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-700/50 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-300">
                  Чухал бүтэлгүйтлийн хувилбарууд
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/30">
                    <h4 className="font-semibold text-red-400 mb-2">
                      Төслийн бүрэн бүтэлгүйтэл
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Хэрэв төслийн дунд үед санхүүжилт тасарч, нөөц төсөв
                      байхгүй бол лаборатори хэсэгчлэн засварлагдсан, ашиглах
                      боломжгүй байдалтай үлдэж болзошгүй.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-700/30">
                    <h4 className="font-semibold text-orange-400 mb-2">
                      Тоног төхөөрөмжийн нийцгүй байдал
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Нийцтэй эсэхийг шалгалгүйгээр өөр өөр үйлдвэрлэгчийн тоног
                      төхөөрөмж худалдан авах нь системүүд хоорондоо зөв
                      ажиллахгүй болох эрсдэлтэй.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                    <h4 className="font-semibold text-yellow-400 mb-2">
                      Аюулгүй байдлын зөрчил
                    </h4>
                    <p className="text-slate-300 text-sm">
                      Хугацаанд амжихын тулд суурилуулалтыг яаруулснаар аюулгүй
                      байдлын зөрчил гарч, засвар хийтэл лабораторийг ашиглах
                      боломжгүй болох магадлалтай.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-6"
          >
            Зардлын задаргаа
          </motion.h2>
          <div className="space-y-6">
            {/* Core Laboratory Equipment & Tools */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Үндсэн лабораторийн тоног төхөөрөмж ба багаж хэрэгсэл
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2">Нэр</th>
                        <th className="text-center py-2">
                          Тооцоолсон нэгж үнэ (USD)
                        </th>
                        <th className="text-center py-2">
                          Тооцоолсон үнэ (MNT)
                        </th>
                      </tr>
                    </thead>

                    <tbody className="space-y-2">
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Микроскоп</td>
                        <td className="text-center py-2">$300–$450</td>
                        <td className="text-center py-2">
                          ~250,000–450,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Центрифуг</td>
                        <td className="text-center py-2">$70–$200</td>
                        <td className="text-center py-2">
                          ~245,000–700,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Лабораторийн жин</td>
                        <td className="text-center py-2">$50–$150</td>
                        <td className="text-center py-2">
                          ~50,000–150,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">pH хэмжигч</td>
                        <td className="text-center py-2">$55–$150</td>
                        <td className="text-center py-2">
                          ~55,000–150,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Усны ванн / хуурай ванн</td>
                        <td className="text-center py-2">$50–$150</td>
                        <td className="text-center py-2">
                          ~50,000–150,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Соронзон хутгагч / халаагч тавцан
                        </td>
                        <td className="text-center py-2">$350–$1,050</td>
                        <td className="text-center py-2">
                          ~350,000–1,050,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Вортекс холигч / жижиг сэгсрэгч
                        </td>
                        <td className="text-center py-2">$280–$875</td>
                        <td className="text-center py-2">
                          ~280,000–875,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Шилэн савны иж бүрдэл (аяга, колбо, туршилтын хоолой)
                        </td>
                        <td className="text-center py-2">$50–$100</td>
                        <td className="text-center py-2">
                          ~50,000–100,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Хэрэглээний материал (үзүүр, хоолой, бээлий, арчигч)
                        </td>
                        <td className="text-center py-2">$41–$80</td>
                        <td className="text-center py-2">~41,000–80,000 MNT</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Аюулгүй байдлын хэрэгсэл (хамгаалалтын нүдний шил,
                          халаад, бээлий)
                        </td>
                        <td className="text-center py-2">$75–$125</td>
                        <td className="text-center py-2">
                          ~75,000–125,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Хөргөгч / жижиг лабораторийн хөргөгч
                        </td>
                        <td className="text-center py-2">$1,200–$2,200</td>
                        <td className="text-center py-2">
                          ~1,200,000–2,200,000 MNT
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Агааржуулалт (заавал биш)</td>
                        <td className="text-center py-2">$200–$400</td>
                        <td className="text-center py-2">
                          ~200,000–400,000 MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-yellow-400 font-semibold">
                    💡 Нийт (суурь, бүрэн ажиллагаатай тохиргоо)
                  </p>
                  <p className="text-slate-300">
                    👉 Бага дүнгийн тооцоо: ~$2,380 → ~8,330,000 MNT
                  </p>
                  <p className="text-slate-300">
                    👉 Их дүнгийн тооцоо: ~$9,150 → ~32,025,000 MNT
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    (Энэ нь үндсэн шинжилгээ ба бэлтгэлийн багажтай жижиг
                    лабораторийг тооцсон — илүү дэвшилтэт эсвэл тусгай
                    зориулалтын тоног төхөөрөмжийн хувьд үнэ өсөх боломжтой.)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Furniture & Room Setup */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  🪑 Тавилга ба өрөөний тохижилт
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2">Нэр</th>
                        <th className="text-center py-2">
                          Тооцоолсон нэгж үнэ (USD)
                        </th>
                        <th className="text-center py-2">
                          Тооцоолсон үнэ (MNT)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Лабораторийн ширээ / ажлын тавцан (нэг ширээ)
                        </td>
                        <td className="text-center py-2">$250–$320</td>
                        <td className="text-center py-2">
                          ~405,000–500,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Тавиур / хадгалах шүүгээ</td>
                        <td className="text-center py-2">$260–$290</td>
                        <td className="text-center py-2">
                          ~420,000–500,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Сандал / суудал (лабораторид аюулгүй)
                        </td>
                        <td className="text-center py-2">$130–$180</td>
                        <td className="text-center py-2">
                          ~210,000–630,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Самбар / зарын самбар</td>
                        <td className="text-center py-2">$85–$120</td>
                        <td className="text-center py-2">
                          ~140,000–420,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Гэрэлтүүлгийн сайжруулалт (тод LED)
                        </td>
                        <td className="text-center py-2">$130–$165</td>
                        <td className="text-center py-2">
                          ~210,000–300,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Будалт / интерьер</td>
                        <td className="text-center py-2">$55–$75</td>
                        <td className="text-center py-2">
                          ~85,000–120,000 MNT
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          Цахилгаан / залгуурын шинэчлэлт
                        </td>
                        <td className="text-center py-2">$140–$230</td>
                        <td className="text-center py-2">
                          ~225,000–375,000 MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-green-400 font-semibold">
                    💡 Тавилга ба засварын нийт тооцоо:
                  </p>
                  <p className="text-slate-300">
                    👉 Бага: ~$1,050 → ~2,900,000 MNT
                  </p>
                  <p className="text-slate-300">
                    👉 Их: ~$1,300 → ~3,700,000 MNT
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Utilities & Installation */}
            <Card className="bg-slate-900/70 border-slate-700 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  🔌 Шугам сүлжээ ба суурилуулалт
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2">Нэр</th>
                        <th className="text-center py-2">
                          Тооцоолсон нэгж үнэ (USD)
                        </th>
                        <th className="text-center py-2">
                          Тооцоолсон үнэ (MNT)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Залгуур</td>
                        <td className="text-center py-2">$50–$150</td>
                        <td className="text-center py-2">
                          ~175,000–525,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">
                          Шугам / дамжуулах хоолой (шаардлагатай бол)
                        </td>
                        <td className="text-center py-2">$80–$250</td>
                        <td className="text-center py-2">
                          ~280,000–875,000 MNT
                        </td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">Агааржуулалт / кондиционер</td>
                        <td className="text-center py-2">$60–$120</td>
                        <td className="text-center py-2">
                          ~210,000–420,000 MNT
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">Аюулгүй душ</td>
                        <td className="text-center py-2">$50–$150</td>
                        <td className="text-center py-2">
                          ~175,000–525,000 MNT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-slate-800/50 rounded-lg">
                  <p className="text-purple-400 font-semibold">
                    💡 Шугамын сүлжээ ба дэд бүтцийн тооцоо:
                  </p>
                  <p className="text-slate-300">
                    👉 Бага: ~$240 → ~840,000 MNT
                  </p>
                  <p className="text-slate-300">
                    👉 Их: ~$670 → ~2,345,000 MNT
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Grand Total */}
<Card className="bg-gradient-to-r from-blue-900/70 to-purple-900/70 border-slate-600 rounded-2xl">
  <CardContent className="p-6">
    <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-400">
      📊 Нийт дүнгийн тооцоо
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full text-slate-300">
        <thead>
          <tr className="border-b border-slate-500">
            <th className="text-left py-3">Ангилал</th>
            <th className="text-center py-3">
              Бага дүн (USD / MNT)
            </th>
            <th className="text-center py-3">Их дүн (USD / MNT)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-600">
            <td className="py-3 font-medium">
              Тоног төхөөрөмж ба багаж хэрэгсэл
            </td>
            <td className="text-center py-3">
              $2,020 / ~7.1M MNT
            </td>
            <td className="text-center py-3">
              $5,600 / ~19.6M MNT
            </td>
          </tr>
          <tr className="border-b border-slate-600">
            <td className="py-3 font-medium">
              Тавилга ба интерьер
            </td>
            <td className="text-center py-3">$1,050 / ~3.7M MNT</td>
            <td className="text-center py-3">
              $1,700 / ~5.95M MNT
            </td>
          </tr>
          <tr className="border-b border-slate-600">
            <td className="py-3 font-medium">
              Шугам сүлжээ ба суурилуулалт
            </td>
            <td className="text-center py-3">$240 / ~0.84M MNT</td>
            <td className="text-center py-3">
              $670 / ~2.35M MNT
            </td>
          </tr>
          <tr className="bg-slate-800/50">
            <td className="py-3 font-bold text-yellow-400">
              Нийт дүн
            </td>
            <td className="text-center py-3 font-bold text-green-400">
              ~$3,310 / ~11.65M MNT
            </td>
            <td className="text-center py-3 font-bold text-red-400">
              ~$5,270 / ~19.2M MNT
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-center text-slate-400 text-sm mt-4">
      *Бүх үнэ нь тооцоолол бөгөөд нийлүүлэгч, байршил болон
      тодорхой шаардлагаас хамааран өөрчлөгдөж болно.
    </p>
  </CardContent>
</Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-4"
          >
            Төслийн нөлөө
          </motion.h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-6">
            Энэхүү засвар шинэчилэлт нь хуучирсан лабораторийг орчин үеийн,
            аюулгүй, үр ашигтай суралцах орчин болгон хувиргаж, боловсролын
            чанарыг ихээхэн дээшлүүлж, сурагчдыг ирээдүйн шинжлэх ухааны
            карьерын бэлтгэлтэй болгоно.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="rounded-2xl px-8 border-slate-600 text-slate-300 hover:bg-slate-700"
              onClick={() => window.print()}
            >
              Бүрэн саналын файлыг татах
            </Button>
            <Button className="rounded-2xl px-8 bg-green-600 hover:bg-green-700">
              Төслийг батлах
            </Button>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
