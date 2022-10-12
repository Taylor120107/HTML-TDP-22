const chai = require ("chai");
const chaiHttp = require ("chai-Http");

chai.use(chaiHttp);

const server = require ("../index");
const {nameModel} = require ("../db");


describe("group tests", () => {
    
    
    let testGroup;

    beforeEach(async () => {
        try {
            await nameModel.deleteMany({});
            testGroup = await nameModel.create({
                name: "Luke",
                job: "Tech",
                mood: "indifferent"
            });
            testGroup = JSON.parse(JSON.stringify(testGroup));
            console.log();
        }catch (err) {
            console.error(err)
        }
    })

    it("should add a name to the group", (done) => {
        const newName = {
            name: "Luke",
            job: "Tech",
            mood: "indifferent"
        }
        chai.request(server).post("/names/newName").send(newName).end((err,res)=> {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newName);
            done();
        })
    });

    it("should get all names", (done) => {
        chai.request(server).get("/names/getAll/").end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.be.equal(200);
            chai.expect(res.body).to.include(testGroup);
            done();
        })
    });
})


