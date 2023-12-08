import { db } from './connect.js'

export const cropCheck = async() => {

    const tableName = "crop_data"; // Our pre-defined crop table

    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();

    console.log(results);
}


export const insertData = async() => {
    // const prefix = "reputations_80001_7724";
    const tableName = `reputations_80001_7724`;
    const { meta: insert } = await db
        .prepare(`INSERT INTO test_80001_7735 (id ) VALUES (?);`)
        .bind(1)
        .run();

    console.log(insert.txn.transactionHash); // e.g., my_sdk_table_80001_311
    const res = await insert.txn.wait();
    console.log(res);
}

export const getAnnotator = async(annotator_address) => {
    // const prefix = "my_sdk_table";
    // const tableName = `reputations_80001_7724`;
    const tableName = `annotators_80001_7704`;
    const { results } = await db.prepare(`SELECT * FROM ${tableName} WHERE address = '${annotator_address}';`).all();
    console.log(results);
    return results
}
export const getAnnotators = async() => {
    // const prefix = "my_sdk_table";
    // const tableName = `reputations_80001_7724`;
    const tableName = `annotators_80001_7704`;
    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
    console.log(results);
    return results
}


export const createJob = async(job) => {
    const tableName = "jobs_final2_80001_7898";
    const { meta: insert } = await db
        .prepare(`INSERT INTO ${tableName} (name, vendor_address, job_id,  cid, status , bounty) VALUES (?, ?, ?, ?, ?, ?);`)
        .bind(job.name, job.vendor_address, job.job_id, job.cid, job.status, job.bounty)
        .run();
    console.log(insert.txn.transactionHash); // e.g., my_sdk_table_80001_311
    waitForTransaction(insert)
    return insert.txn.transactionHash
}


export const getAllJobs = async() => {
    const tableName = `jobs_final2_80001_7898`;
    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
    console.log(results);
    return results

}

export const getVendorJobs = async(vendor_address) => {
    const tableName = `jobs_final2_80001_7898`;
    const { results } = await db.prepare(`SELECT * FROM ${tableName} WHERE vendor_address = '${vendor_address}';`).all();
    console.log(results);
    return results

}

export const getJob = async(job_id) => {
    const tableName = `jobs_final2_80001_7898`;
    const { results } = await db.prepare(`SELECT * FROM ${tableName} WHERE job_id = '${job_id}';`).all();
    console.log(results);
    return results
}

export const getJobResults = async() => {

    const { results } = await db.prepare(`SELECT * FROM results_final_80001_7932 LIMIT 100;`).all();
    console.log(results);
    return results

}

export const updateJobStatus = async(job_id, status) => {

    const tableName = `jobs_final2_80001_7898`;
    const { meta: update } = await db
        .prepare(`UPDATE ${tableName} SET status = '${status}' WHERE job_id = '${job_id}';`)
        .run();
    console.log(update.txn.transactionHash); // e.g., my_sdk_table_80001_311
    waitForTransaction(update)

    // if (status == "pending") {
    computeJobResults(job_id)
        // }

    return update.txn.transactionHash
}


const insertResults = async(results, job_id) => {

    const tableName = `results_final_80001_7932`;

    const { meta: insert } = await db
        .prepare(`INSERT INTO ${tableName} (job_id,  results) VALUES (?, ?);`)
        .bind(job_id, results)
        .run();
    console.log(insert.txn.transactionHash);
    waitForTransaction(insert)

    const res = await updateJobStatus(job_id, "completed")

    console.log(res.txn.transactionHash);

    return insert.txn.transactionHash

}