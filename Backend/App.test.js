const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('./App');

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("Backend server", () => {
    it("should return valid ticket data when given a valid request", async () => {
        const res = await chai.request(app).get('/tickets/1');
        expect(res.status).to.equal(200);
        expect(res.body).to.not.be.null;
    });
});